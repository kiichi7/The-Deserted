#pragma strict
var newStaple : GameObject;
var stapleNum : int;
//private var i : int;

function Start () {

	for (var i = 0; i < stapleNum; i ++) {
		Instantiate(newStaple, transform.position, transform.rotation);
		transform.position.y += 0.21;
	}


}

function Update () {


}