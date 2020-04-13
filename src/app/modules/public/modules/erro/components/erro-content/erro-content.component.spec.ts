/***************************************************************************************************
 * This program search an user from GitHub
 * Copyright (C) 2020 Adriano Araújo Felisberto
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see [http://www.gnu.org/licenses/].
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroContentComponent } from './erro-content.component';

describe('ErroContentComponent', () => {
  let component: ErroContentComponent;
  let fixture: ComponentFixture<ErroContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErroContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
