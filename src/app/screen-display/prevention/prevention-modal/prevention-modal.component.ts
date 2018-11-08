import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-prevention-modal',
  templateUrl: './prevention-modal.component.html',
  styleUrls: ['./prevention-modal.component.css']
})
export class PreventionModalComponent implements OnInit {
  @Input() url;
  private safeUrl;
  constructor(public activeModal: NgbActiveModal, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    // $('#message').load(this.url);
  }

}
