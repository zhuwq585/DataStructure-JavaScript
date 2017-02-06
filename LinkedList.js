/*
	content: JavaScript 单链表
	author:  zhuwq
	date:    2016-10-14
	e-mail:  512030849@qq.com
*/

/*
	instructions:
		类定义：
			LinkedList() 单链表
			DoublyLinkedList() 双向链表
			CircularLinkedList() 单项循环链表
			DoublyCircularLinkedList() 双向循环链表

		结点定义：
			var Node = function(element){
				this.element = element; 结点内容
				this.next = null; 右指针
				this.prev = null; 左指针
			}

		内部变量：
			var length 链表长度
			var head   头指针
			var tail   尾指针

		方法：
			append(element) 向尾部添加结点
			insert(position,element) 向位置position处插入结点
			removeAt(position) 按照索引值删除结点
			remove(element) 删除给定结点
			remove() 删除最后一个结点
			indexOf(element) 返回给定结点的索引值
			isEmpty() 判断链表是否为空
			size() 返回链表长度
			toString 转换为字符串输出
			getHead() 获取头结点
			getTail() 获取尾结点

		方法内部常用变量：
			current 当前指针
			previous 上一元素的指针
			index 索引值
			indexCheck 索引检查

		在使用环境中扩展类，添加遍历方法：
			方法：
				LinkedList.prototype.traverse = function(head){
					var current = head;

					while(current){
						//遍历操作
						// ......   
						current = current.next;
					}
					return true;
				}
			调用：
				var a = new LinkedList();
				a.traverse(a.getHead());

*/	


/*单链表*/
function LinkedList(){
	/*节点定义*/
	var Node = function(element){
		this.element = element; //存放节点内容
		this.next = null; //指针
	}

	var length = 0, //存放链表长度
	    head = null; //头指针

	this.append = function(element){
	 	var node = new Node(element), 
	 		current;

	 	if (!head){
	 		head = node;
	 	}else {
	 		current = head;

	 		while(current.next){
	 			current = current.next;
	 		}

	 		current.next = node;
	 	}

	 	length++;
	 	return true;
	};

	this.insert = function(position, element){
	 	if (position >= 0 && position <= length) {
	 		var node = new Node(element),
		 		current = head,
		 		previous,
		 		index = 0;

	 		if(position === 0){
	 			node.next = current;
	 			head = node;
	 		}else{
	 			while(index++ < position){
	 				previous = current;
	 				current = current.next;
	 			}
	 			node.next = current;
	 			previous.next = node;
	 		}

	 		length++;
	 		return true;
	 	}else{
	 		return false;
	 	}
	 };

	this.removeAt = function(position){
	 	if(position > -1 && position < length){
	 		var current = head,
	 		previous,
	 		index = 0;

	 		if (position === 0) {

	 			head = current.next;

	 		}else{

	 			while (index++ < position){
	 				previous = current;
	 				current = current.next;
	 			}

	 			previous.next = current.next;
	 		};

	 		length--;
	 		return current.element;
	 	}else{
	 		return null;
	 	}
	};

	this.remove = function(element){
	 	var current = head,
	 		previous;

	 	if(element === current.element){
	 		head = current.next;
	 		length--;
	 		return true;
	 	}
	 	previous = current;
	 	current = current.next;

	 	while(current){
	 		if(element === current.element){
	 			previous.next = current.next;
	 			length--;
	 			return true;
	 		}else{
	 			previous = current;
	 			current = current.next;
	 		}
	 	}
	 	return false;
	};

	this.remove = function(){
	 	if(length < 1){
	 		return false;
	 	}

	 	var current = head,
 		previous;

	 	if(length == 1){
	 		head = null;
	 		length--;
	 		return current.element;
	 	}

 	
	 	while(current.next !== null){
	 		previous = current;
	 		current = current.next;
	 	}

	 	previous.next = null;
	 	length--;
	 	return current.element;
	};

	this.indexOf = function(element){
	 	var current = head,
	 		index = 0;

	 	while(current){
	 		if(element === current.element){
	 			return index;
	 		}
	 		index++;
	 		current = current.next;
	 	}

	 	return false;
	};

	this.isEmpty = function(){
	 	return length === 0;
	};

	this.size = function(){
	 	return length;
	};

	this.toString = function(){
	 	var current = head,
	 		string = '';

	 	while(current){
	 		string += current.element;
	 		current = current.next;
	 	}
	 	return string;
	};	 

	this.getHead = function(){
	 	return head;
	}
	
}


function CircularLinkedList(){
	var Node = function(element){
		this.element = element;
		this.next = null;
	}

	var length = 0,
		head = null;

	this.append = function(element){
		var node = new Node(element),
			current;

		if (!head) {
			head = node;
			node.next = head;
		}else{
			current = head;

			while(current.next !== head){
				current = current.next;
			}

			current.next = node;
			node.next = head;
		};

		length++;
		return true;
	};

	this.insert = function(position, element){
		if(position > -1 && position < length){
			var node = new Node(element),
			index = 0,
			current = head,
			previous;


			if (position === 0) {

				node.next = head;
				head = node;

			}else{

				while(index++ < position){
					previous = current;
					current = current.next;
				}

				previous.next = node;
				node.next = current;

			};

			length++;
			return true;
		}else{
			return false;
		}
	};

	this.removeAt = function(position){
		if(position > -1 && position < length){
	 		var current = head,
	 		previous,
	 		index = 0;

	 		if (position === 0) {

	 			head = current.next;

	 		}else{

	 			while (index++ < position){
	 				previous = current;
	 				
	 				console.log("added");
	 			}

	 			previous.next = current.next;
	 		};

	 		length--;
	 		return current.element;
	 	}else{
	 		return null;
	 	}
	};

	this.remove = function (element){
		var current = head,
			previous,
			indexCheck = 0;

		while(current && indexCheck < length){
			if(current.element === element){
				if(indexCheck == 0){
					head = current.next;
					length--;
					return true;
				}else{
					previous.next = current.next;
					length--;
					return true;
				}
			}else{
				previous = current;
				current = current.next;
				indexCheck++;
			}
		}
		return false;
	};

	this.remove = function(){
		if(length === 0){
			return false;
		}

		var current = head,
			previous,
			indexCheck = 0;

		if(length === 1){
			head = null;
			length--;
			return current.element;
		}

		while(indexCheck++ < length){
			previous = current;
			current = current.next;
		}
		previous.next = head;
		length--;
		return current.element;
	};

	this.indexOf = function(element){
		var current = head,
			index = 0;

		while(current && index < length){
			if(current.element === element){
				return index;
			}else{
				index++;
				current = current.next;
			}
		}
		return false;
	};


	this.isEmpty = function(){
	 	return length === 0;
	};

	this.size = function(){
	 	return length;
	};

	this.toString = function(){
	 	var current = head,
	 		string = '',
	 		indexCheck = 0;

	 	while(current && indexCheck < length){
	 		string += current.element;
	 		current = current.next;
	 		indexCheck++;
	 	}

	 	return string;
	};	 

}


function DoublyLinkedList() {
	var Node = function(element) {
		this.element = element;
		this.next = null;
		this.prev = null;
	};

	var length = 0,
		head = null,
		tail = null;

	this.append = function(element){
		var node = Node(element),
			current,
			previous;
		
		if(!head){
			head = node;
			tail = node;
		}else{
			current = head;
			while(current){
				previous = current;
				current = current.next;
			}

			node.next = current;
			current.prev = node;
			previous.next = node;
			node.prev = previous;
		}

		length++;
		return true;
	}

	this.insert = function(position,element){
		if(position > -1 && position < length){
			var node = new Node(element),
				current = head,
				previous,
				index = 0;

			if(position === 0){

				if(!head){
					head = node;
					tail = node;
				}else{
					node.next = current;
					current.prev = node;
					head = node;
				}

			}else if (position === length -1){
				current = tail;
				current.next = node;
				node.prev = current;
			}else {
				while(index++ < position){
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
				current.prev = node;
				node.prev = previous;
			}

			length++;
			return true;
		}else{
			return false;
		}
	};

	this.removeAt = function(position){
		if(position > -1 && position < length){
			var current = head,
				index = 0,
				previous;

			if (position === 0) {
				head = current.next;

				if(length === 1){
					tail = null;
				}else{
					head.prev = null;
				}
			}else if(position === length - 1){
				current = tail;
				tail = current.prev;
				tail.next = null;
			} else{
				while(index++ < position){
					previous = current;
					current = current.next;
				}

				previous.next = current.next;
				current.next.prev = previous;
			};
			length-- ;

			return current.element;
		}else{
			return false;
		}
	};

	this.remove = function(element){
		var current = head,
			previous;

		if(current.element === element){
			head = current.next;
		}
		previous = current;
		current = current.next;

		while(current){
			if (current.element = element) {
				previous.next = current.next;
				current.next.prev = previous;
			}else{
				previous = current;
				current = current.next;
			}
		}
		return false;
	};

	this.remove = function(){
		if (length === 0) {
			return false;
		};

		var current = head,
			previous;

		if(length === 1){
			head = null;
			tail = null;
			length--;
			return current.element;
		}

		while(current){
			previous = current;
			current = current.next;
		}

		previous.next = null;
		length--;
		return current.element;
	};

	this.indexOf = function(element){
		var current = head,
			index = 0;

		while(current && index++ < length){
			if (current.element === element) {
				return index;
			};
			current = current.next;
		}

		return false;
	};

	this.isEmpty = function(){
		return length === 0;
	};

	this.size = function(){
		return length;
	};

	this.toString = function(){
		var current = head,
			string = '';

		while(current){
			string += current.element;
			current = current.next;
		}
		return string;
	};

	this.getHead = function(){
		return head;
	};

	this.getTail = function(){
		return tail;
	};
}


/*双向循环链表*/
function DoublyCircularLinkedList(){
	var Node = function(element){
		this.element = element;
		this.next = null;
		this.prev = null;
	};

	var length = 0,
		head = null,
		tail = null;

	this.append = function(element){
		var node = new Node(element),
			current,
			previous;

		if (!head) {
			head = node;
			tail = node;
			head.prev = tail;
			tail.next = head;
		}else{
			current = head;

			while(current.next !== head){
				previous = current;
				current = current.next;
			}

			current.next = node;
			node.next = head;
			node.prev = current;
		};

		length++;
		return true;
	};

	this.insert = function(position, element){
		if(position >= 0 && position <= length){
			var node = new Node(element),
			index = 0,
			current = head,
			previous;

			if(position === 0){
				
				if(!head){

					node.next = node;
					node.tail = node;
					head = node;
					tail = node;

				}else{

					current.prev = node;
					node.next = current;
					head = node;
					node.prev = tail;

				}
				
			}else if(position === length){
				current = tail;

				current.next = node;
				node.prev = current;
				tail = node;
				node.next = head;
			}else{

				while(index++ < position){
					previous = current;
					current = current.next;
				}

				current.prev = node;
				node.next = current;
				previous.next = node;
				node.prev = previous;

			}

			length++;
			return true;
		}else{
			return false;
		}
	};

	this.removeAt = function(position){
		if(position > -1 && position < length){

			var current = head,
				index = 0,
				previous;

			if(position === 0){

				current.next.previous = tail;
				head = current.next;

			}else if(position === length - 1){

				current = tail;

				current.prev.next = head;
				head.prev = current.prev;
				tail = current.prev;
			}else{

				while(index++ < position){
					previous = current;
					current = current.next;
				}

				previous.next = current.next;
				current.next.prev = previous;

			}

			length--;
			return true;
		}else{
			return false;
		}
	};

	this.remove = function(element){
		var current = head,
			previous,
			indexCheck = 0;

		while(current && indexCheck < length){
			if(current.element === element){
				if(indexCheck === 0){
					current.next.prev = tail;
					head = current.next;
				}else{
					current.next.prev = previous;
					previous.next = current.next;
				}
				length--;
				return true;
			}

			previous = current;
			current = current.next;
			indexCheck++;
		}

		return false;
	};

	this.remove = function(){
		if(length === 0){
			return false;
		}

		var current = head,
			previous,
			indexCheck = 0;

		if(length === 1){
			head = null;
			tail = null;
			length--;
			return current.element;
		}

		while(indexCheck++ < length){
			previous = current;
			current = current.next;
		}

		previous.next = head;
		tail = previous.next;
		length--;
		return current.element;
	};

	this.indexOf = function(element){
		var current = head,
			index = 0;

		while(current && index++ < length){
			if(current.element === element){
				return index;
			}
			current = current.next;
		}

		return false;
	};

	this.toString = function(){
		var current = head,
			indexCheck = 0,
			string = '';

		while(current && indexCheck < length){
			string += current.element;
			indexCheck++;
			current = current.next;
		}	

		return string;
	};

	this.isEmpty = function(){
		return length === 0;
	};

	this.getHead = function(){
		return head;
	};

	this.getTail = function(){
		return tail;
	};

	this.size = function(){
		return length;
	};
}