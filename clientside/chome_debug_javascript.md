#### List Javascript block that not have src attribute 

```
for(i  = 0 ; i < document.scripts.length; i++){
    let sc = document.scripts.item(i)
    if(sc.innerHTML != ''){
    	console.log(sc) ;
    }
}
```
