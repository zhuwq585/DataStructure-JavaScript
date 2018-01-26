    //set    
    function Set(){    
        //私有变量    
        var items = {},    
            size = 0;    
      
      
        //add item into the Set. return type:Object(Set)    
        this.add = function(value){    
            if(!this.has(value)){    
                items[value] = value;    
                size++;    
                return this;    
            }    
            throw 'Set.add() false';    
            return false;    
        };    
        //remove item from the Set.  return type: Object(Set)    
        this.remove = function(value){    
            if(this.has(value)){    
                delete items[value];    
                size--;    
                return this;    
            }    
            throw 'Set.remove() false';    
            return false;    
        };    
        //if the item is in the Set.  return type: Boolean    
        this.has = function(value){    
            return items.hasOwnProperty(value);    
        };    
        //clear the Set.  return: true    
        this.clear = function(){    
            items = {};    
            size = 0;    
            return true;    
        };    
        //get the size of the Set. return type: Number    
        this.size = function(){    
            return size;    
        };    
        //get the list of items in the Set. return type: Object(Array)    
        this.values = function(){    
            return Object.keys(items);    
        };  
    }   
    //some function about set calculating in constructor object    
    //get intersection return type: Object(Set)    
    Set.intersection = function(set1, set2){    
        var res = new Set(),    
            temp = set1.values();    
        for(var i in temp){    
            if(set2.has(temp[i]))     
                res.add(temp[i]);    
        }    
        return res;    
    }    
    //get union return type: Object(Set)    
    Set.union = function(set1, set2){    
        var res = new Set(),    
            temp = set1.values(),    
            temp2 = set2.values();    
        for(var i in temp)     
            res.add(temp[i]);    
        for(var j in temp2)     
            res.add(temp2[j]);    
        
        return res;    
    }    
    //get difference   return type: Object(Set)    
    Set.difference = function(set1, set2){    
        var res = new Set(),    
            temp = set1.values();    
        for(var i in temp)    
            if(!set2.has(temp[i]))     
                res.add[temp[i]];    
            
        return res;    
    }    
    //get cartesion product.using array to show the ordered pair. return type: Object(Set)    
    Set.cartesianProduct = function(set1,set2){    
        var res = new Set(),    
            temp1 = set1.values(),    
            temp2 = set2.values();    
        for(var i = 0; i < temp1.length;i++)    
            for(var j = 0;j < temp2.length;j++)    
                res.add([temp1[i],temp2[j]]);    
        return res;    
    }    
    //get symmetric difference.  return type: Object(Set)    
    Set.symmetricDifference = function(set1, set2){    
        return Set.union(Set.difference(set1, set2),Set.difference(set2,set1));    
    }    
    //if set1 is set2's subset. return type: Boolean    
    Set.isSubset = function(set1, set2){ // if set1 is set2's subset, return true    
        var temp = set1.values();    
        for(var i in temp)    
            if(!set2.has(temp[i]))     
                return false;    
        return true;    
    }    
    //if set1 is set2's proper subset. return type: Boolean    
    Set.isProperSubset = function(set1, set2){ // if set1 is set2's proper subset, return true    
        if(set1.size() >= set2.size())     
            return false;    
        return Set.isSubset(set1, set2);    
        
        //another     
        //return Set.isSubset(set1, set2) && !Set.equality(set1, set2);    
    }    
    //if 2 sets are equaled. return type: Boolean    
    Set.equality = function(set1, set2){    
        return Set.isSubset(set1, set2) && Set.isSubset(set2, set1);    
    }    