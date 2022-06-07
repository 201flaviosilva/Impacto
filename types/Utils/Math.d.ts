export default class UtilsMath {
    randomFloat(min: any, max: any, precision?: number): number;
    randomInt(min: any, max: any): number;
    randomColor(): string;
    degreesToRadians(degrees: any): number;
    radiansToDegrees(radians: any): number;
    distanceTwoPoints(x1: any, y1: any, x2: any, y2: any): number;
    distanceTwoPointsVector2(point1: any, point2: any): number;
    angleBetweenTwoPoints(x1: any, y1: any, x2: any, y2: any): number;
    angleBetweenTwoPointsVector2(point1: any, point2: any): number;
    angleBetweenTwoPointsDegrees(x1: any, y1: any, x2: any, y2: any): number;
    angleBetweenTwoPointsVector2Degrees(point1: any, point2: any): number;
    distanceBetweenTwoCirclesFromCircle(circle1: any, circle2: any): number;
    distanceBetweenTwoCircles(x1: any, y1: any, radius1: any, x2: any, y2: any, radius2: any): number;
    circleArea(radius: any): number;
    circlePerimeter(radius: any): number;
    distanceBetweenTwoRectanglesFromRectangle(rect1: any, rect2: any): number;
    distanceBetweenTwoRectangles(x1: any, y1: any, width1: any, height1: any, x2: any, y2: any, width2: any, height2: any): number;
    angleBetweenTwoRectangles(x1: any, y1: any, width1: any, height1: any, x2: any, y2: any, width2: any, height2: any): number;
    angleBetweenTwoRectanglesFromRectangle(rect1: any, rect2: any): number;
    rectangleArea(width: any, height: any): number;
    rectanglePerimeter(width: any, height: any): number;
    rectanglePerimeterFromRectangle(rectangle: any): number;
    rectangleVertices(x: any, y: any, width: any, height: any): {
        x: any;
        y: any;
    }[];
    rectangleVerticesFromRectangle(rectangle: any): {
        x: any;
        y: any;
    }[];
    rectangleCenterX(x: any, width: any): any;
    rectangleCenterY(y: any, height: any): any;
    rectangleCenter(x: any, y: any, width: any, height: any): {
        x: any;
        y: any;
    };
    rectangleCenterXFromRectangleBounds(rectangle: any): any;
    rectangleCenterYFromRectangleBounds(rectangle: any): any;
    rectangleCenterFromRectangleBounds(rectangle: any): {
        x: any;
        y: any;
    };
    rectangleTopLeft(x: any, y: any): {
        x: any;
        y: any;
    };
    rectangleTopRight(x: any, y: any, width: any): {
        x: any;
        y: any;
    };
    rectangleBottomLeft(x: any, y: any, height: any): {
        x: any;
        y: any;
    };
    rectangleBottomRight(x: any, y: any, width: any, height: any): {
        x: any;
        y: any;
    };
    rectangleTopLeftFromRectangleBounds(rectangle: any): {
        x: any;
        y: any;
    };
    rectangleTopRightFromRectangleBounds(rectangle: any): {
        x: any;
        y: any;
    };
    rectangleBottomLeftFromRectangleBounds(rectangle: any): {
        x: any;
        y: any;
    };
    rectangleBottomRightFromRectangleBounds(rectangle: any): {
        x: any;
        y: any;
    };
}
export const UtilsMathInstance: UtilsMath;
//# sourceMappingURL=Math.d.ts.map