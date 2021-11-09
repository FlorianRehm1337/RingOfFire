import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss'],
})
export class StartscreenComponent implements OnInit {
  constructor(private firestore: AngularFirestore, private router: Router) {}

  ngOnInit(): void {}

  newGame() {
    //Start game
    let game = new Game();
    this.firestore
    .collection('games')
    .add(game.toJson())
    .then((gameInfo:any) => {
      this.router.navigateByUrl('/game/' + gameInfo.id);
    });

  }
}
