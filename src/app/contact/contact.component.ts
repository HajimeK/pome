import { Component, OnInit , Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

interface Categories {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

@Injectable()
export class ContactComponent implements OnInit {

  categories: Categories[] = [
    {value: 'question', viewValue: 'Question'},
    {value: 'request', viewValue: 'Request'},
    {value: 'offer', viewValue: 'Job Offer'}
  ];
  sent: string = "";
  sent_message: string = "Thank you for filling the form. I will respond you back in ??? business days. <p> </p>";
  inquiryForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl(''),
    category: new FormControl('')
  });

  private sendURL = "https://pomeinquiryfunction.azurewebsites.net/api/pmeinquiryfunction";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/plain',
                               'Origin': 'https://hajimek.github.io' })};

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.sent = this.sent_message;
    console.info(JSON.stringify(this.inquiryForm.value));
    // let result = this.http.post<JSON>(this.sendURL, JSON.stringify(this.inquiryForm.value), this.httpOptions);
    let result = this.http.post<JSON>(this.sendURL, this.inquiryForm.value, this.httpOptions)
    .toPromise();
    //.pipe(map((response: any) => console.info(response.json())));
    // .pipe(
    //   catchError(this.handleError)
    // );
    console.info(result);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
