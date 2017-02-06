function BinaryTree(){
	var Node = function(key){
		this.key = key;
		this.lchild = null;
		this.rchild = null;
	}

	var root = null,
		size = 0;

	this.BuildTree = function(dataType, data){
		switch(dataType){
			case 'array':
				BuildByArray(data);
				break;
			/*case '':

				break;
			case '':

				break;
			case '':

				break; 根据给定遍历序列初始化树、待定 */
			/*case 'json':
				BuildByJSON(data);
				break;*/	
		}
	}
    
    var BuildByArray = function(data){
    	var array = ArrayNodeMake(data),
    		length = array.length,
    		i = 0; 

    	while(i < length && array[i]){
    		if (2 * (i+1) <= length) 
    			array[i].lchild = array[2 * (i+1) - 1]; //this访问不到 闭包问题
    		if (2 * (i + 1) <= length) 
    			array[i].rchild = array[2 * (i + 1)];
    		i++;
    	}

    	root = array[0];
    	size = array.length;
    	return this;
    }

    var ArrayNodeMake = function(array){
    	for(var i = 0;i < array.length;i++){
    		if(array[i] == undefined) array[i] = null;  //若该元素为空，直接赋值null，避免将不存在的结点生成为key为undefined的空结点。
    		else{
    			var node = new Node(array[i]);
    			array[i] = node;	
    		}
    	}
    	return array;
    }

    /*中序遍历*/
    this.inOrderTraverse = function(callback){
    	inOrderTraverseDo(root, callback);
    }

    var inOrderTraverseDo = function(node, callback){
    	if(node !== null){
    		inOrderTraverseDo(node.lchild, callback);
    		callback(node);
    		inOrderTraverseDo(node.rchild, callback);
    	}
    }

    /*先序遍历*/
    this.preOrderTraverse = function(callback){
    	preOrderTraverseDo(root, callback);
    }

    var preOrderTraverseDo = function(node, callback){
    	if (node !== null) {
    		callback(node);
    		preOrderTraverseDo(node.lchild, callback);
    		preOrderTraverseDo(node.rchild, callback);
    	}
    }

    /*后序遍历*/
    this.postOrderTraverse = function(callback){
    	postOrderTraverseDo(root, callback);
    }

    var postOrderTraverseDo = function(node, callback){
    	if (node !== null) {
    		postOrderTraverseDo(node.lchild, callback);
    		postOrderTraverseDo(node.rchild, callback);
    		callback(node);
    	}
    }

    /*层序遍历 需要使用队列*/   /*出现死循环*/ 
    this.levelOrderTraverse = function(callback){
    	var queue = new LinkedQueue(),
    		current = root;

        while(current !== null){
            callback(current);
            if(current.lchild) queue.push(current.lchild);
            if(current.rchild) queue.push(current.rchild);

            try{
                current = queue.getFront();
            }catch(e){
                return;
            }
            queue.pop();
        }




    	/*while(node){
    		callback(node);

    		if(node.lchild)	queue.push(node.lchild);
    		if(node.rchild) queue.push(node.rchild);

    		queue.pop();
    		node = queue.getFront();
    	}*/

    	return true;
    }
   /*this.BuildByJSON = function(json){

    };*/



    this.getRoot = function(){
    	return root;
    }
    this.getSize = function(){
    	return size;
    }
    this.getDepth = function(){

    }
    this.clear = function(){
    	root = null;
    	return true;
    }
}



function LinkedQueue () {
	var Node = function(element){
		this.element = element;
		this.next = null;
	} 

	var length = 0,
		front,
		rear;

	this.push = function(element){
		var node = new Node(element),
			current;

		if(length == 0){
			front = node;
			rear = node;
			length++;

			return true;
		}else{
			current = rear;
			current.next = node;
			rear = node;
			length++;

			return true;
		}
	}

	this.pop = function(){
		if(!front){
			return 'Queue is null';
		}else{
			var current = front;
			front = current.next;
			current.next = null;
			length--;
			return current;
		}
	}

	this.size = function(){
		return length;
	}

	this.getFront = function(){
		return front;
	}

	this.getRear = function(){
		return rear;
	}

	this.toString = function(){
		var str = '',
			current = front;

		while(current){
			str += current.element;
			current = current.next;
		}

		return str;
	}

	this.clear = function(){
		front = null;
		rear = null;
		length = 0;
		return true;
	}
}

