'use client';
import { useBuilder } from '@/context/BuilderContext';
import { CAMERA_ANGLES, PHOTO_STYLES, COMPOSITIONS } from '@/data/styles';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function CameraSection() {
  const { state, dispatch } = useBuilder();
  return (
    <section className="stitch-card flex flex-col gap-2">
      <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-sage-secondary mb-1">
        Camera &amp; Style
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-forest-muted">Camera angle</label>
          <Select value={state.cameraAngle} onValueChange={v => dispatch({ type:'SET_CAMERA_FIELD', field:'cameraAngle', value:v })}>
            <SelectTrigger><SelectValue options={CAMERA_ANGLES} /></SelectTrigger>
            <SelectContent>
              {CAMERA_ANGLES.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-forest-muted">Photo style</label>
          <Select value={state.photoStyle} onValueChange={v => dispatch({ type:'SET_CAMERA_FIELD', field:'photoStyle', value:v })}>
            <SelectTrigger><SelectValue options={PHOTO_STYLES} /></SelectTrigger>
            <SelectContent>
              {PHOTO_STYLES.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-forest-muted">Composition</label>
          <Select value={state.composition} onValueChange={v => dispatch({ type:'SET_CAMERA_FIELD', field:'composition', value:v })}>
            <SelectTrigger><SelectValue options={COMPOSITIONS} /></SelectTrigger>
            <SelectContent>
              {COMPOSITIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}
