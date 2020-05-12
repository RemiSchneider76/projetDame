import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class AppDame extends Component {

  state = {
    grille: [],
    joueur: "1"
  };
  initPion(grillePion) {
    /* var laLigne
     var laColonne*/

    var found
    /*for (var i = 1; i == 30; i++) {
      // premiére tentavive qui n'aboutit pas
       laLigne = Math.floor(i / 10)
       laColonne = i % 10
      
    }*/
    /* deuxiéme tentavtive
    for (var h = 1; h < 31; h++) {
      found = grillePion.find(element => element == '<td id=' + h + 'style={{ backgroundColor: "black" }} > <img className="pionBlanc" alt="imagePionBlanc" src="img/pionBlanc.jpg" /><img className="pionNoire" alt="imagePionNoir" src="img/pionNoir.jpg" /></td>')
      console.log(found)
    }*/

    for (var j = 1; j < 31; j++) {

    }

    //for (var i = 71; i !== 100; i++) {}



    //this.state.grille.slice(grillePion)
  }


  initGrille() {
    var id = 1
    var grilleParent = []
    var grilleChildren = []
    var inversement = 1
    //premiére tentative de génération mais d'interprétation du code au niveau du render 
    /*
    var grilleInit = this.state.grille
    var divid = 1
    for (var i = 0; i < 100; i++) {
      if (i == 0) {
        grilleInit[i] = "<tr><td>Test</td>"
      } else if (i == 99) {
        grilleInit[i] = '<td>Test</td></tr>'
      } else if (i % 2 == 0 && i / divid == 9) {
        grilleInit[i] = '</tr><tr><td>Test</td>'
        divid++
      } else if (i % 2 != 0 && i / divid == 9) {
        grilleInit[i] = '</tr><tr><td style="background-color:black;">Test</td>'
        divid++
      } else if (i % 2 == 0) {
        grilleInit[i] = '<td>Test</td>'
      } else {
        grilleInit[i] = '<td style="background-color:black;" >Test</td>'
      }
    }*/
    //seconde méthode qui fonctionne

    for (var i = 0; i < 10; i++) {
      grilleChildren = []
      for (var x = 1; x !== 11; x++) {

        if (inversement % 2 !== 0) {
          if (x % 2 !== 0) {
            grilleChildren.push(<td id={id + ""} ><img className="pionBlanc" alt="imagePionBlanc" src="img/pionBlanc.jpg" /><img className="pionNoire" alt="imagePionNoir" src="img/pionNoir.jpg" /></td>)
          } else {
            grilleChildren.push(<td id={id + ""} style={{ backgroundColor: "black" }} > <img className="pionBlanc" alt="imagePionBlanc" src="img/pionBlanc.jpg" /><img className="pionNoire" alt="imagePionNoir" src="img/pionNoir.jpg" /></td>)
          }

        } else {
          if (x % 2 !== 0) {
            grilleChildren.push(<td id={id + ""} style={{ backgroundColor: "black" }} > <img className="pionBlanc" alt="imagePionBlanc" src="img/pionBlanc.jpg" /><img className="pionNoire" alt="imagePionNoir" src="img/pionNoir.jpg" /></td>)
          } else {
            grilleChildren.push(<td id={id + ""}> <img className="pionBlanc" alt="imagePionBlanc" src="img/pionBlanc.jpg" /><img className="pionNoire" alt="imagePionNoir" src="img/pionNoir.jpg" /></td>)
          }

        }
        id++
      }
      grilleParent.push(<tr>{grilleChildren}</tr>)
      inversement++
    }
    this.state.grille.push(grilleParent)
    this.initPion(grilleParent)
  }

  render() {

    return (
      <div>
        <table>

          <tbody>
            {this.initGrille()}
            {this.state.grille}
          </tbody>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<AppDame />, rootElement)

