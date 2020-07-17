# AngularJS - Swipe List

An AngularJS based Swipe List component which provides swipe effects in your Angular application. It also allows you to change button options like you can place delete / edit / info buttons as per your requirements.


## Table of contents

- [Demo](#demo)
- [Installation](#installlation)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Options](#options)
- [Example completed](#example-completed)
- [Want to Contribute?](#want-to-contribute)
- [Collection of Components](#collection-of-components)
- [Changelog](#changelog)
- [Credits](#credits)
- [License](#license)
- [Keywords](#Keywords)

## Demo

<p  align="center">
<small>Preview</small>
<br>
<img src="https://i.imgur.com/WGotbov.png"  alt="Preview 1" />
</p>

---

<p  align="center" style="display:flex;justify-content: space-between;width:100%;align-content: center;">
<b>Examples</b><br>

<img height="400" src="https://i.imgur.com/qMXkbXm.gif"  alt="Preview 1" />
<img height="400" src="https://i.imgur.com/LspDKT6.gif"  alt="Preview 2" />
<img height="400" src="https://i.imgur.com/orpXyIv.gif"  alt="Preview 3" />
</p>

### Installation

`npm i angular-weblineindia-swipe --save`

### Getting started

```typescript
import { BrowserModule, HammerModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { SwipeAngularListModule } from "angular-weblineindia-swipe"; // <------ IMPORT

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    HammerModule, // < ----- ******************************** IMPORTANT ******************
    SwipeAngularListModule // < ----- ******************************** IMPORTANT ******************
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Usage

Use in your component

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",

  templateUrl: "./app.component.html",

  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "for-test";

  list = [
    {
      id: 1,

      title: "Realizar la tarea asignada!",

      subTitle: "9:00pm"
    },

    {
      id: 2,

      title: "Visitar al perro en casa de tu amiga",

      subTitle: "9:00pm"
    },

    {
      id: 3,

      title: "Llamar al doctor",

      subTitle: "9:00pm"
    },

    {
      id: 4,

      title: "Buscar el auto en el taller",

      subTitle: "9:00pm"
    }
  ];

  action = a => {
    console.log(a);
  };
}
```

### Template

```html
<div>
  <h3 style="text-align: center">Task List</h3>

  <div>
    <sw-item-list
      *ngFor="let item of list"
      [inside]="item"
      [item-class]="'list-custom'"
      [editTemplate]="editTemplate"
      [trashTemplate]="trashTemplate"
      (callback)="action($event)"
    >
    </sw-item-list>
  </div>
</div>

!<-- Define your template for icon button (edit)-->

<ng-template #editTemplate>
  <i class="fas fa-edit"></i>
</ng-template>

!<-- Define your template for icon button (trash)-->

<ng-template #trashTemplate>
  <i class="fas fa-trash"></i>
</ng-template>
```

### Options

**item** structure defined :

```text

{

id: 1,

title: 'Realizar la tarea asignada!',

subTitle: '9:00pm'

}

```

**item-class** name of style class custom.

**show-mark** boolean show icon done or not

**editTemplate** template for edit button

**trashTemplate** template for trash button

**markTemplate** template for icon check template

**notMarkTemplate** template for icon not check template

**(callback)** function callback click option

**(swClick)** click on item

```html
<sw-item-list
  *ngFor="let item of list"
  [inside]="item"
  [item-class]="'list-custom'"
  [show-mark]="true"
  (swClick)="click(item)"
  [editTemplate]="editTemplate"
  [trashTemplate]="trashTemplate"
  [markTemplate]="defaultMark"
  [notMarkTemplate]="defaultNotMark"
  (callback)="action($event)"
>
</sw-item-list>
```

#### Example completed

```html
<div>
  <h3 style="text-align: center">TASK LIST</h3>

  <div>
    <sw-item-list
      *ngFor="let item of list"
      [inside]="item"
      [item-class]="'list-custom'"
      [show-mark]="false"
      [disable-mark]="item?.disable"
      (swClick)="click(item)"
      [editTemplate]="editTemplate"
      [trashTemplate]="trashTemplate"
      [markTemplate]="defaultMark"
      [customTemplate]="customTemplateSrc"
      [notMarkTemplate]="defaultNotMark"
      (callback)="action($event)"
    >
    </sw-item-list>
  </div>
</div>

<ng-template #editTemplate>
  <i class="fas fa-edit"></i>
</ng-template>

<ng-template #trashTemplate>
  <i class="fas fa-trash"></i>
</ng-template>

<ng-template #defaultMark>
  <i class="far fa-check-circle"></i>
</ng-template>

<ng-template #defaultNotMark>
  <i class="far fa-circle"></i>
</ng-template>

<ng-template #customTemplateSrc let-item="item" let-id="id">
  <div style="display: flex;">
    <div style="padding-right: 10px;">
      <img
        style="width:60px;height:60px;border-radius:60px;"
        [src]="'https://api.adorable.io/avatars/400/'+id+'.png'"
        alt=""
      />
    </div>

    <div>
      <h3 style="margin-top: 0;margin-bottom: 0;">Lorem, ipsum dolor.</h3>

      <small style="color:gray;font-weight:500;"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
        optio.</small
      >
    </div>
  </div>
</ng-template>
```

## Want to Contribute?

- Created something awesome, made this code better, added some functionality, or whatever (this is the hardest part).
- [Fork it](http://help.github.com/forking/).
- Create new branch to contribute your changes.
- Commit all your changes to your branch.
- Submit a [pull request](http://help.github.com/pull-requests/).

---

## Collection of Components

We have built many other components and free resources for software development in various programming languages. Kindly click here to view our [Free Resources for Software Development](https://www.weblineindia.com/software-development-resources.html).

---

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## Credits

angular-weblineindia-swipe is inspired by [angular-swipe-actions](https://www.npmjs.com/package/angular-swipe-actions).

## License

[MIT](LICENSE)

[mit]: https://github.com/weblineindia/AngularJS-Swipe-List/blob/master/LICENSE

## Keywords

angularjs-touch, angular-gestures, angularjs, angular-pwa, angular-slide, angular-swipe-list, swipelist, angular-swiper, swipe-list