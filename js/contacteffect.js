const content = document.querySelector(".content");
	[...content.textContent].reduce((pre,next,index) =>{
		pre == index && (content.innerHTML = '');
		let spans = document.createElement('span');
		spans.innerHTML = next;
		content.appendChild(spans);
		spans.addEventListener("mouseover",function(){
				this.classList.add("color");
			});
		spans.addEventListener("animationend",function(){
				this.classList.remove("color");
			});
	},0);

	// console.log([...div.textContent]);
// textContent获取div内容，点语法展开获取单个字符的数组
// 设定pre的初始值为0，这样就使得pre和index相等，在它们相等的情况下清空div标签
		// console.log(pre,next,index);
		// 创建一个span新元素，变量名为spans，将next参数里的字符赋给spans，再将它用appendChild的方法追加到div元素中（注意spans在这里是变量，appendChild的方法里直接写就好，不用加单引号或者双引号）
				// 为spans添加监听器，当鼠标移动到span标签上的各个字时，对span标签的样式节点列表添加颜色的css样式,this指的是spans
				
						// 添加动画结束时的事件,动画结束后移除div标签中的color,再次点击时又触发上面的添加color,这样就可以实现多次的动画

