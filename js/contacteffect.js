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
// textContent��ȡdiv���ݣ����﷨չ����ȡ�����ַ�������
// �趨pre�ĳ�ʼֵΪ0��������ʹ��pre��index��ȣ���������ȵ���������div��ǩ
		// console.log(pre,next,index);
		// ����һ��span��Ԫ�أ�������Ϊspans����next��������ַ�����spans���ٽ�����appendChild�ķ���׷�ӵ�divԪ���У�ע��spans�������Ǳ�����appendChild�ķ�����ֱ��д�ͺã����üӵ����Ż���˫���ţ�
				// Ϊspans��Ӽ�������������ƶ���span��ǩ�ϵĸ�����ʱ����span��ǩ����ʽ�ڵ��б������ɫ��css��ʽ,thisָ����spans
				
						// ��Ӷ�������ʱ���¼�,�����������Ƴ�div��ǩ�е�color,�ٴε��ʱ�ִ�����������color,�����Ϳ���ʵ�ֶ�εĶ���

