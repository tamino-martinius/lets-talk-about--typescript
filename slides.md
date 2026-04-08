---
title: Lets talk about ... TypeScript
---

---
build: true

## Lets Talk about...
# TypeScript

---

# What is TypeScript?

---
build: true

## What is TypeScript?
- ES6+ with optional typings
- Compiles to plain JavaScript
- Open source language by Microsoft
- Very good integration in VS Code

---

## What is TypeScript?
- ES6+ with optional typings
- Compiles to plain JavaScript
- Open source language by Microsoft
- Very good integration in VS Code & others

---

# Static typed languages

---
build: true

## Static typed languages
- Java
  ```
  String name = 'Tamino';
  ```
- C#
  ```
  string name = 'Tamino';
  ```
- Objective-C
  ```
  NSString name = 'Tamino';
  ```

---

# Optionally typed

---
build: true

## Optionally typed
- with type
  ```ts
  const name: string = 'Tamino';
  ```
- without type
  ```ts
  const name = 'Tamino';
  ```
- implies*
  ```ts
  const name: any = 'Tamino';
  ```

---
build: true

## Optionally typed
- with type
  ```ts
  const name: string = 'Tamino';
  ```
- without type
  ```ts
  const name = 'Tamino';
  ```
- implies
  ```ts
  const name: string = 'Tamino';
  ```

---

# Why TypeScript?

---

# Productivity

---

# Reliability

---

# [Demo](https://www.typescriptlang.org/play/index.html#src=function%20shiftplanPublishedMailer(receipient)%20%7B%0D%0A%20%20%20%20console.log(%0D%0A%20%20%20%20%20%20%20%20receipient.name%20%2B%20'%3C'%20%2B%20receipient.email%20%2B%20'%3E'%0D%0A%20%20%20%20)%3B%0D%0A%7D%0D%0A)

---
type: section

# TypeScript Overview

---
build: true

## Basic Types
- number
  ```ts
  const luckyNumber: number = 8;
  ```
- boolean
  ```ts
  const isActive: boolean = false;
  ```
- string
  ```ts
  const name: string = 'Tamino';
  ```

---
build: true

## Multiple Types
- ```ts
  let param: string | undefined;
  ```
- ```ts
  param = 'foo';
  ```
- ```ts
  param = undefined;
  ```
- ```ts
  param = 8; // 💩
  ```

---
build: true

## Combined Types
- ```ts
  type optionalString = string | undefined;
  let param: optionalString;
  let param?: string;
  ```
- ```ts
  type vote = 'yay' | 'nay';
  ```

---
build: true

## Array Declarations
- normal
  ```ts
  const shifts: Shift[];
  ```
- alternate
  ```ts
  const shifts: Array<Shift>;
  ```
- Multi Dimensional
  ```ts
  const shiftLists: Shift[][];
  ```

---
build: true

## Dictionaries
- ```ts
  const phoneBook: { [name: string]: string };
  ```
- ```ts
  phoneBook['Tamino'] = '01577 1234567';
  ```
- ```ts
  phoneBook['Tamino'] = 15771234567; // 💩
  ```
- ```ts
  phoneBook[0] = '01577 1234567'; // 💩
  ```

---
build: true

## Dictionaries
- ```ts
  const phoneBook: {
    emergency: string;
    [name: string]: string;
  };
  ```
- ```ts
  class Foo {
    [key: string]: any;
  }
  ```

---
build: true

## Functions
- ```ts
  const callback: ( shifts: Shift[]) => void;
  ```
- ```ts
  class Foo {
    bar(params: string[]): string { ... }
  }
  ```

---
build: true

## Function overloading
- ```ts
  class Foo {
    bar(params: string[]): string { ... }
  }
  ```

---

## Function overloading
- ```ts
  type nuStr = number | str;
  class Foo {
    bar(params: nuStr[]): nuStr { ... }
  }
  ```

---

## Function overloading
- ```ts
  class Foo {
    bar(params: string[]): string
    bar(params: number[]): number
    { ... }
  }
  ```

---
build: true

## Classes
- ```ts
  class Foo {
    public static readonly TABLE_NAME = 1;
    private static _name: string;
  }
  ```

---

## Classes
- ```ts
  class Foo {
    public static readonly TABLE_NAME;
    private static _name: string;
    static get TABLE_NAME {
      return this._name.toUpperCase();
    }
  }
  ```

---
build: true

## Interfaces
- ```ts
  interface IEmailable {
    name: string;
    email: string;
  }
  ```
- ```ts
  interface Employment extends IEmailable
  ```
- ```ts
  class Employment implements IEmailable
  ```

---
build: true

- ```ts
  interface IEmailable {
    name: string;
    email: string;
  }
  ```
- ```ts
  interface Employment extends IEmailable
  ```
- ```ts
  class Employment implements IEmailable
  ```
- ```ts
  class A extends B implements D, E
  ```

---
build: true

## [Enums](https://www.typescriptlang.org/play/index.html#src=enum%20Style%20%7B%0D%0A%20%20%20%20NONE%20%3D%200%2C%0D%0A%20%20%20%20BOLD%20%3D%201%2C%0D%0A%20%20%20%20ITALIC%20%3D%202%2C%0D%0A%20%20%20%20UNDERLINE%20%3D%204%2C%0D%0A%20%20%20%20EMPHASIS%20%3D%20Style.BOLD%20%7C%20Style.ITALIC%2C%0D%0A%20%20%20%20HYPERLINK%20%3D%20Style.BOLD%20%7C%20Style.UNDERLINE%2C%0D%0A%7D%0D%0A)
- ```ts
  enum Style {
    NONE = 0,
    BOLD = 1,
    ITALIC = 2,
    UNDERLINE = 4,
    EMPHASIS = Style.BOLD | Style.ITALIC,
    HYPERLINK = Style.BOLD | Style.UNDERLINE,
  }
  ```

---
build: true

## [Enums](https://www.typescriptlang.org/play/index.html#src=enum%20ShiftplanStatus%20%7B%0D%0A%20%20New%2C%0D%0A%20%20Published%2C%0D%0A%7D%0D%0A)
- ```ts
  enum ShiftplanStatus {
    New,
    Published,
  }
  ```

---
build: true

## Get Enum Values
- ```ts
  const style: number = Style.ITALIC; // 2
  ```
- ```ts
  let status: string;
  status = Status[Status.New]; // 'New'
  ```

---
build: true

## Modules
- ```ts
  module Shyftplan {
    export class Employment;
    ...
  }
  ```

---
build: true

## Generics
- ```ts
  interface Array<T> {
    ...
    map<U>(cb: (value: T) => U): U[];
    ...
  }
  ```

---
type: section

# Thats it

---

## Whats next?
- [Playground](https://www.typescriptlang.org/play)
- [Slides](https://tamino-martinius.github.io/lets-talk-about--typescript)
- ```
  npm install typescript -g
  ```

---
type: section

# Questions?
