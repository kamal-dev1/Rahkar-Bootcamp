import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-get-server-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-server-data.component.html',
  styleUrl: './get-server-data.component.scss'
})
export class GetServerDataComponent {
  constructor(private postService:PostService){

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.postService.getMyServerData().subscribe(data=>[
      console.log(data)

    ])
  }
}
