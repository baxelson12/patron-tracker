import { AfterViewInit, Component, VERSION, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Result } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements AfterViewInit {

  ngVersion = VERSION.full;

  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  hasDevices: boolean;
  hasPermission: boolean;
  qrResultString: string;
  qrResult: Result;

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo;

  ngAfterViewInit(): void {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;
      // selects the devices's back camera by default
      for (const device of devices) {
          if (/back|rear|environment/gi.test(device.label)) {
            this.scanner.device = device;
            this.currentDevice = device;
            break;
          }
      }
    });

    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
  }

  handleQrCodeResult(resultString: string) {
    console.debug('Result: ', resultString);
    this.playAck();
    const final_value = JSON.parse(resultString)
    this.employeeForm.patchValue({
      name: final_value.name,
      phone: final_value.phone
    })
  }

  playAck() {
    let audio = new Audio();
    audio.src = '../../assets/ack.wav';
    audio.load();
    audio.play();
  }

  employeeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl(''),
    timestamp: new FormControl({value: new Date(), disabled: true})
  });

  get name() { return this.employeeForm.get('name') }
  get phone() { return this.employeeForm.get('phone') }

  resetForm(): void {
    this.employeeForm.reset()
    this.employeeForm.patchValue({
      timestamp: new Date()
    })
  }
}
