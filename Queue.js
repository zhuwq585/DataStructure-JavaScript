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


function ArrayQueue(){
	var arr = [];

	this.push = function(element){
		arr.push(element);
		return true;
	}

	this.pop = function(){
		return arr.shift();
	}

	this.getFront = function(){
		return arr[0];
	}

	this.getRear = function(){
		return arr[arr.length - 1]
	}

	this.isEmpty = function(){
		return arr.length == 0;
	}

	this.clear = function(){
		arr = [];
	}

	this.size = function(){
		return length;
	}
}