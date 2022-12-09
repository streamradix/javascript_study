/* 명명법 naming - 권장
	
	1. 두문자어, 약어, 의미없는 이름은 사용하지 마라
	2. 변수 이름 자체가 변수를 설명할 수 있게 하라
		- 보통 변수 이름이 여러 단어로 이루어질 가능성이 높음
		- 여러 단어로 변수명이 이루어 질 때 일반적인 방법: 어떤 방식이든 일관성을 유지하라
			1) camel case: 첫 번째 단어 다음에 이어지는 각 단어의 첫 글자를 대문자로 쓴다
			2) snake case: 각 단어 사이를 밑줄 underscore 로 이어준다
*/

const cid = 12; // 나쁜 예: cid 가 뭔가
const clientId = 24; // 좋은 예: 값이 client id 를 의미하는 구나

console.log(cid, clientId);

const lastloggedin = 3;
const lastLoggedIn = 6; // camel case
const last_logged_in = 9; // snake case

console.log(lastloggedin, lastLoggedIn, last_logged_in);

/* 명명법 naming - 제약

	1. 변수명은 숫자로 시작할 수 없다
	2. 변수명에는 공백, 기호, 마침표가 들어갈 수 없다
	3. 예약어는 이름으로 사용하지 못 한다
*/

/* 예약어 Reserved Word (keyword)
	: 언어에서 문법적인 용도로 사용되고 있기 때문에 식별자로 사용할 수 없는 단어
	
	abstract
	arguments
	await
	boolean
	
	break
	byte
	case
	catch

	char
	class
	const
	continue

	debugger
	default
	delete
	do

	double
	else
	enum
	eval

	export
	extends
	false
	final

	finally
	float
	for
	function

	goto
	if
	implements
	import
	
	in
	instanceof
	int
	interface

	let
	long
	native
	new

	null
	package
	private
	protected

	public
	return
	short
	static

	super
	switch
	synchronized
	this

	throw
	throws
	transient
	true

	try
	typeof
	var
	void

	volatile
	while
	with
	yield
*/
