interface CanvasProps {
  width: number;
  height: number;
  color: string;
}

export const Canvas = ({ width, height, color }: CanvasProps) => {
  return <div id="canvas"></div>;
};
