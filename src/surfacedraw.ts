import { IPoint } from './point';

export interface ISurfaceDraw {
  scale: number;
  offsetX: number;
  offsetY: number;
  mousePosition: IPoint;

  fromDeviceScale(val: number): number;
  toDeviceScale(val: number): number;
  line(x1: number, y1: number, x2: number, y2: number, strokeStyle?: string);
  polyline(points: IPoint[], strokeStyle?: string);
  polygon(points: IPoint[], strokeStyle?: string, fillStyle?: string);
  bezierCurve(
    x1: number,
    y1: number,
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x2: number,
    y2: number,
    strokeStyle?: string,
  );
  rect(x: number, y: number, w: number, h: number, strokeStyle?: string);
  text(text: string, x: number, y: number, font?: string, strokeStyle?: string);
  image(img: ImageBitmap, x: number, y: number, width: number, height: number, scale: number);
  // arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean)
  // arcTo(x1: number, y1: number, x2: number, y2: number, radius: number);
  // ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean);
  // quadraticCurve(x0: number, y0: number, cpx: number, cpy: number, x: number, y: number);
}
