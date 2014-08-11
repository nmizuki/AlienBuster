var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
////////アイテムたち//////配列に/////

//アイテムオブジェクト
/////////名前
/////////ダメージ数

function Cell() {
	this.name = null;
	this.damage=0;
	this.color=null;
}

//総アイテム数
var itemNum=9;

//アイテム格納配列
var items=new Array();
	for(var i=0;i<itemNum;i++){
		items[i]=new Cell();
	}

//アイテムオブジェクトを配列に格納
items[0].name="醤油";
items[0].damage=20;
items[0].color="red";

items[1].name="洗剤";
items[1].damage=30;
items[1].color="green";

items[2].name="水";
items[2].damage=10;
items[2].color="blue";

items[3].name="片栗粉";
items[3].damage=20;
items[3].color="black";

items[4].name="ケチャップ";
items[4].damage=20;
items[4].color="red";

items[5].name="塩";
items[5].damage=20;
items[5].color="black";

items[6].name="エナジードリンク";
items[6].damage=-30;
items[6].color="yellow";

items[7].name="雑巾";
items[7].damage=10;
items[7].color="gray";

items[8].name="海苔";
items[8].damage=10;
items[8].color="green";


//////表示中アイテム///
var displayItems=new Array(4);

	for(var i=0;i<4;i++){
		displayItems[i]=null;
	}

//////使用済みアイテム///未実装//
//var usedItem=new Array();

////選択中ボタン
var nowSelect;
var nowSelect2;

/////宇宙人HP
var alienHP=100;
/////自分のHP
var myHP=100;


///////////アイテム４つ設定////////////
function getItem(){
	disp();
	for(var i=1;i<5;i++){
		var itemPlace='item'+i;
		setItem(itemPlace);
	}
}

//////////////////////////////////////


////アイテム1つランダムで、itemPlaceで指定したボタンにセット//////////
function setItem(itemPlace){
	var newFlag=false;
	while(true){
		var num1=Math.random();
		num1=Math.floor(num1*itemNum);
		console.log(num1);

		//既に入っていないかチェック
		for(var i=0;i<4;i++){
			//既存
			if(displayItems[i]==num1){
				break;
			}

			//既存なし
			else if(i>=3){
				//alert("既存なし");
				newFlag=true;
			}

		}

		if(newFlag==true){
			break;
		}
	}
	//bottonのvalue値を描き替え
	var itemA=document.getElementById(itemPlace);
	itemA.value=items[num1].name;

	//表示中アイテムに登録(アイテム配列の添え字)
	switch(itemPlace){
		case 'item1':
			displayItems[0]=num1;
			break;
		case 'item2':
			displayItems[1]=num1;
			break;
		case 'item3':
			displayItems[2]=num1;
			break;
		case 'item4':
			displayItems[3]=num1;
			break;

	}

	for(var i=0;i<4;i++){
		console.log(i+'個めは'+displayItems[i]);
	}
}

//////////////////////////////////




/////選択中アイテムは青色に/////////

function selectA(selectPlace){
	//選択済み
	if(selectPlace==nowSelect){
		//選択解除
		var select1=document.getElementById(nowSelect);
		select1.style.backgroundColor="#ffb098";
		nowSelect=null;
		//alert('選択解除１');
		//ret
		return;
	}
	if(selectPlace==nowSelect2){
		//選択解除
		var select1=document.getElementById(nowSelect2);
		select1.style.backgroundColor="#ffb098";
		nowSelect2=null;
		//alert('選択解除２');
		//ret
		return;
	}



	//未選択のボタン
	if(nowSelect==null){
		nowSelect=selectPlace;
		//alert('新たに1に登録');
	}
	else if(nowSelect2==null){
		nowSelect2=selectPlace;
	}
	else{
		return;
	}
	var select=document.getElementById(selectPlace);
	// select.style.backgroundColor="blue";
	select.className = "active";

	//hiddenに色を設定
		var giveColor;
		switch(nowSelect){
			case 'item1':
				giveColor=displayItems[0];
				break;
			case 'item2':
				giveColor=displayItems[1];
				break;
			case 'item3':
				giveColor=displayItems[2];
				break;
			case 'item4':
				giveColor=displayItems[3];
				break;
		}

		var giveColor1=items[giveColor].color;

		var hiddenPlace=document.getElementById('hc');
		hiddenPlace.value=giveColor1;


	//canvas操作が開始したら
	canvas.addEventListener('mousedown', mouseDownListner, false);



	//canvas操作が終了したら
	canvas.addEventListener('touchend', mouseUpListner, false);
}


//canvas上のマウスダウンで操作開始とみなす（仮）
function mouseDownListner(e) {
	//ここで描画？
	//1のみ選択
	if(nowSelect!=null && nowSelect2==null){
		//alert('1のみ！');

	}
	//2のみ選択
	else if(nowSelect==null && nowSelect2!=null){
		//alert('2のみ！');
	}
	//両方選択
	else if(nowSelect!=null && nowSelect2!=null){
		//alert('両方！！');

	}

}

//canvas上のマウスアップで操作終了とみなす（仮）
function mouseUpListner(e) {
	if(nowSelect!=null){
		var select1=document.getElementById(nowSelect);
	}

	if(nowSelect2!=null){
		var select2=document.getElementById(nowSelect2);
	}

//	var select1=document.getElementById(nowSelect);
//	console.log(nowSelect);


	//攻撃
		//display配列の添字を取得
		var damageIndex;
		var damageIndex2;
		var damageValue;


		//１だけ
		if(nowSelect!=null && nowSelect2==null){
				switch(nowSelect){
				case 'item1':
					damageIndex=displayItems[0];
					break;
				case 'item2':
					damageIndex=displayItems[1];
					break;
				case 'item3':
					damageIndex=displayItems[2];
					break;
				case 'item4':
					damageIndex=displayItems[3];
					break;
				}

			damageValue=items[damageIndex].damage;

		}

		//２だけ
		else if(nowSelect==null && nowSelect2!=null){
				switch(nowSelect2){
				case 'item1':
					damageIndex=displayItems[0];
					break;
				case 'item2':
					damageIndex=displayItems[1];
					break;
				case 'item3':
					damageIndex=displayItems[2];
					break;
				case 'item4':
					damageIndex=displayItems[3];
					break;
				}

			damageValue=items[damageIndex].damage;

		}

		//2つ選択
		else if(nowSelect!=null && nowSelect2!=null){

			//組み合わせによるダメージ値の設定
			damageValue=30;

		}


		// プレゼン用
		damageValue = 20;

		alert('ただいまの攻撃値:'+damageValue);
		alienHP=alienHP-damageValue;
		var hp=document.getElementById('alienhpTag');
		hp.value=alienHP;
		if(alienHP<=0){
			win();
		}



	if(nowSelect!=null && nowSelect2==null){
		//青色解除
		//次のアイテム
		//選択中アイテムリセット
		select1.style.backgroundColor="#ffb098";
		setItem(nowSelect);
		nowSelect=null;
	}

	else if(nowSelect==null && nowSelect2!=null){
		//青色解除
		//次のアイテム
		//選択中アイテムリセット
		select2.style.backgroundColor="#ffb098";
		setItem(nowSelect2);
		nowSelect2=null;
	}

	else if(nowSelect!=null && nowSelect2!=null){
		//青色解除
		//次のアイテム
		//選択中アイテムリセット
		select1.style.backgroundColor="#ffb098";
		setItem(nowSelect);
		nowSelect=null;

		select2.style.backgroundColor="#ffb098";
		setItem(nowSelect2);
		nowSelect2=null;
	}



		console.log(select1);


	//次のアイテム
	setItem(select1);


}


//タイマー
var sec=10;

function disp(){

	console.log(sec);
	console.log('自分の残り体力'+myHP);
	var timerOut=document.getElementById('timer');
	timerOut.textContent=sec;


	if(sec!=0){
		sec--;
	}

	//////////タイマーが0に
	else{
		alienAttack();
		//myHPが0に
		if(myHP<=0){
			gameover();
			return;
		}
		sec=10;
	}

	setTimeout("disp()", 1000);

}


///////////宇宙人の攻撃
function alienAttack(){
	myHP=myHP-20;
	var myhp=document.getElementById('myhpTag');
	myhp.value=myHP;
}

///////////ゲームオーバー
function gameover(){
	ctx.font = "20pt Arial";
	ctx.fillText("gameover", 50, 50);
	setTimeout("end();",2000);
	setTimeout("window.location.reload();", 5000);
}


//////勝利

function win(){
	ctx.font = "20pt Arial";
	ctx.fillText("WIN!!!", 50, 50);
	setTimeout("end();",2000);
	setTimeout("window.location.reload();", 5000);
}

function end(){
		ctx.font = "10pt Arial";
	ctx.fillText("3秒後に新しいゲームが始まります。", 80, 80);
}
