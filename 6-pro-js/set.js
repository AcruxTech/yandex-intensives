module.exports = function MyAwesomeSet() {  
    let data = {
        items: []
    };

    for (const i of arguments) {
        data.items.push(i);
    }

    return {  
        add: function(item) {
            if (!this.has(item)) {
                data.items.push(item);
            }
            return this;
        },
        delete: function(item) {
            // отдельная проверка на NaN
            if (Number.isNaN(item) && data.has(item)) {
                data.items.forEach((item, index) => {
                    if (Number.isNaN(item)) {
                        data.items.splice(index, 1); 
                    }
                });
                return true;
            }

            let index = data.items.indexOf(item);
            if (~index) {
                data.items.splice(index, 1);
                return true;
            }
            return false;
        },
        has: function(item) {
            // отдельная проверка на NaN
            if (Number.isNaN(item)) {
                let isFind = false
                data.items.forEach(item => {
                    if (Number.isNaN(item)) {
                        isFind = true;
                    }
                });
                return isFind;
            }
            console.log(data.items)
            let index = data.items.indexOf(item);
            return !!~index;
        },
        clear: function() {
            data.items.length = 0;
        },
        get size() {
            return data.items.length;
        }
    }  
}