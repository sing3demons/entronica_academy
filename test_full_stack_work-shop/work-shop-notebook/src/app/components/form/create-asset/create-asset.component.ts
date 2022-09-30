import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.css'],
})
export class CreateAssetComponent implements OnInit {
  createAssetForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createAssetForm = this.formBuilder.group({
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      serialNo: ['', [Validators.required]],
      purchaseDate: ['', [Validators.required]],
      warrantyStartDate: ['', [Validators.required]],
      warrantyPeriod: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // if (this.createAssetForm.invalid) {
    //   alert('fail');
    //   return;
    // }

    alert(this.createAssetForm.controls['purchaseDate'].value);
  }
}
