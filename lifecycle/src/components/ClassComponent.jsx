import { Component } from "react";

class Sayac extends Component {
  //Component için kurucu metod
  //1.sırada  Çalışan yapı
  constructor(props) {
    console.log("constructor çalıştı");
    super(props);

    //class componentte state tanımlama
    this.state = {
      count: 0,
    };
  }

  //Coponentin ekrana basıldığı anı yaklar
  //Renderdan sonra çalışır

  componentDidMount() {
    console.log("didmount çalıştı");
  }

  //Eğer componentin statinde bşir değişiklik varsa o zaman çalışır
  componentDidUpdate() {
    console.log("didupdate çalıştı");
  }

  sayacDegistir(islemBilgisi) {
    if (islemBilgisi === "Arttır") {
      this.setState({ count: this.state.count + 1 });
    } else if (islemBilgisi === "Azalt") {
      this.setState({ count: this.state.count - 1 });
    }
  }
  //componentin ekranda gözükmesini sağlayan method
  //2.sırada çalışan yapı
  render() {
    console.log("Render Çalıştı");
    return (
      <>
        <button onClick={() => this.sayacDegistir("Arttır")}>Arttir</button>
        <div>Sayacın Değeri {this.state.count}</div>
        <button onClick={() => this.sayacDegistir("Azalt")}>Azalt</button>
      </>
    );
  }
}

export default Sayac;
