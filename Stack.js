/*链栈的JS实现*/
function LinkedStack(){
	var Node = function(element){
		this.element = element;
		this.next = null;
	}

	var length = 0,
		top; //栈顶指针
		
	this.push = function(element){
		var node = new Node(element),
			current;
		
		if(!top){
			top = node;
			length++;
			return true;
		}else{
			node.next = top;
			top = node;
			length++;
			return true;
		}
	}

	this.pop = function(){
		var current = top;
		if(top){
			top = current.next;
			current.next = null;
			length--;
			return current;
		}else{
			return 'null stack';
		}
	}

	this.top = function(){
		return top;
	} 

	this.size = function(){
		return length; 
	}

	this.toString = function(){
		var string = '',
			current = top;

		while(current){
			string += current.element;
			current = current.next;
		}

		return string;
	}

	this.clear = function(){
		top = null;
		length = 0;

		return true;
	}
}

//顺序栈的JS实现
function ArrayStack(){
	var arr = [];

	this.push = function(element){
		arr.push(element);
	}

	this.pop = function(){
		return arr.pop();
	}

	this.top = function(){
		return arr[arr.length-1];
	}

	this.base = function(){
		return arr[0];
	}

	this.size = function(){
		return arr.length;
	}

	this.isEmpty = function(){
		return arr.length == 0;
	}

	this.clear = function(){
		arr = [];
		return true;
	}

	this.toString = function(){
		return arr.toString();
	}
}