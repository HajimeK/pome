import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile-experiences-aiml',
  templateUrl: './profile-experiences-aiml.component.html',
  styleUrls: ['./profile-experiences-aiml.component.css']
})
export class ProfileExperiencesAimlComponent implements OnInit {
  private experiences: [];
  private sendURL = "http://localhost:5000/aiml";

  httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'text/json'})};

  constructor(private http: HttpClient) { 
    this.experiences = [];
  }

  ngOnInit(): void {
    this.experiences = this.http.get<[]>(this.sendURL, this.httpOptions);
  }

}
