function acao1() {
  console.log("acao1");
}

export default function botao() {
  function acao2() {
    console.log("acao2");
  }

  function acao5(e) {
    console.log(e)
  }

  return (
    <div>
      <button onClick={acao1}>Click #01</button>
      <button onClick={acao2}>Click #02</button>
      <button onClick={function () {
        console.log("acao3");
      }}>Click #03</button>
      <button onClick={() => console.log("acao4")}>click #04</button>
      <button onClick={acao5}>click #05</button>
      <div>
        <input type="text" onChange={e => console.log(e.target.value)}/>
      </div>
    </div>
  )
}