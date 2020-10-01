import { Component, OnInit, VERSION } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  subject = new BehaviorSubject(123);
  observableExample = new Observable(observer => observer.next(123));

  ngOnInit() {
    this.getSubjectValue();
    this.getObservableValue();
  }

  getObservableValue() {
    this.observableExample.subscribe(val => {
      console.log("observable val-->", val);
    });
  }

  getSubjectValue() {
    this.subject.subscribe(val => {
      console.log("val-->", val);
    });
  }

  changeSubjectVal() {
    let newVal = 500;
    this.subject.next(newVal);
  }

  changeObservaleVal() {
    let newVal = 500;
    this.observableExample.subscribe(observer => {
      observer = newVal;
      console.log("observer--", observer);
    });
  }
}
