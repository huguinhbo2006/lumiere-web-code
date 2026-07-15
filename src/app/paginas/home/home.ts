import { Component, OnInit } from '@angular/core';
import { Base } from "../base/base";

@Component({
  selector: 'app-home',
  standalone: true, // 🔥 FALTABA
  imports: [Base],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  id = '215b86d9-b308-43f5-b649-d8d234580607';
}
