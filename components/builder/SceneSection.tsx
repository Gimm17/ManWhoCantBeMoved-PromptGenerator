'use client';
import { useBuilder } from '@/context/BuilderContext';
import { SCENE_PRESETS } from '@/data/scenes';
import { FOOD_OPTIONS } from '@/data/food';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchableSelect } from '@/components/ui/searchable-select';

export const WEATHER_OPTIONS = [
  { value:'clear', label:'Clear', prompt:'clear still air, slightly humid' },
  { value:'drizzle', label:'Light drizzle', prompt:'light drizzle, wet pavement reflections, droplets catching light' },
  { value:'heavy-rain', label:'Heavy rain', prompt:'heavy rain, water streaming on surfaces, splashing puddles on ground' },
  { value:'foggy', label:'Foggy / misty', prompt:'thick foggy and misty haze softening background, reduced visibility' },
  { value:'windy', label:'Windy', prompt:'windy, loose paper and plastic bags blowing, hair and clothes ruffled by gusts' },
  { value:'asap', label:'Asap gerobak', prompt:'smoke and warm steam rising from nearby food stalls, hazy warm air' },
  { value:'humid-tropical', label:'Humid tropical night', prompt:'warm humid tropical night, slight condensation on cold surfaces, sticky air visible in lighting' },
  { value:'post-rain', label:'Habis hujan', prompt:'just after rain, wet glistening surfaces, lingering puddles reflecting lights, fresh damp air' },
  { value:'thunderstorm', label:'Thunderstorm', prompt:'active thunderstorm, dramatic lightning flash illuminating clouds, heavy rain, wind' },
  { value:'dusty-haze', label:'Dusty / hazy', prompt:'dusty haze in the air, warm dry particles visible in light beams, slightly obscured background' },
  { value:'snow-light', label:'Light snow', prompt:'light snowfall, thin layer of snow on surfaces, cold breath visible in air' },
  { value:'overcast-grey', label:'Overcast mendung', prompt:'thick grey overcast sky, flat diffused shadowless light, somber heavy cloud cover' },
];

export const FURNITURE_OPTIONS = [
  { value:'kursi-indomaret', label:'Kursi plastik putih Indomaret', prompt:'small round white plastic table with white mono-block plastic chairs, iconic Indonesian Indomaret style' },
  { value:'kursi-alfamart', label:'Kursi plastik merah Alfamart', prompt:'small round white plastic table with red plastic chairs, Alfamart style' },
  { value:'bangku-angkringan', label:'Bangku angkringan kayu', prompt:'low wooden angkringan bench with narrow wooden plank seating' },
  { value:'trotoar', label:'Duduk di trotoar', prompt:'concrete curb, sitting directly on the ground edge of the sidewalk' },
  { value:'meja-lipat', label:'Meja lipat plastik campur', prompt:'plastic folding table with mismatched plastic chairs of various colors' },
  { value:'dermaga', label:'Sandaran dermaga kayu', prompt:'wooden pier railing, leaning or sitting on weathered wooden planks' },
  { value:'park-bench', label:'Park bench', prompt:'park bench, wooden slats with cast iron frame, slightly worn' },
  { value:'rooftop-ledge', label:'Rooftop ledge', prompt:'rooftop concrete ledge, city panorama behind, low concrete barrier wall' },
  { value:'diner-booth', label:'Diner booth', prompt:'diner booth with red vinyl seats and formica table, chrome trim' },
  { value:'tatami', label:'Tatami + chabudai', prompt:'tatami floor with low Japanese chabudai table, sitting seiza or cross-legged' },
  { value:'tangga', label:'Duduk di tangga', prompt:'concrete staircase steps, sitting casually on different step levels' },
  { value:'lesehan-tikar', label:'Lesehan tikar', prompt:'woven tikar mat laid on the ground, sitting cross-legged on the mat, informal lesehan style' },
  { value:'sofa-tua', label:'Sofa tua bekas', prompt:'old worn fabric couch with sagging cushions, mismatched throw pillows, aged upholstery' },
  { value:'kardus-jalanan', label:'Kardus di jalanan', prompt:'flattened cardboard boxes on the ground as makeshift seating, urban street setting' },
  { value:'bar-stool', label:'Bar stool tinggi', prompt:'tall bar stools with footrests at a high counter table, modern industrial style' },
  { value:'hammock', label:'Hammock / ayunan', prompt:'canvas hammock strung between two posts, gently swaying, relaxed reclined position' },
  { value:'kap-mobil', label:'Kap mobil', prompt:'sitting on the hood of a parked car, legs dangling off the front bumper' },
  { value:'teras-kos', label:'Teras kos — lantai', prompt:'tiled porch floor of an Indonesian kos-kosan boarding house, sitting directly on the floor against the wall' },
];

export const BG_OPTIONS = [
  { value:'motor-indomaret', label:'Motor parkir + papan Indomaret', prompt:'motorcycles parked to the side, Indomaret signage (red-yellow-blue) overhead, fluorescent store light spilling onto pavement' },
  { value:'gerobak-lampu', label:'Gerobak + lampu kuning', prompt:'street food gerobak cart visible in background, yellow sodium streetlamp casting warm glow' },
  { value:'city-skyline', label:'City skyline', prompt:'city skyline with blinking lights visible in distance, dark sky above' },
  { value:'neon-wet', label:'Neon signs + wet street', prompt:'neon signs in multiple colors, rain-slicked reflective street, puddle reflections' },
  { value:'beach-dock', label:'Beach + dock', prompt:'calm ocean, wooden dock planks, sea grass gently blowing, horizon line' },
  { value:'school-corridor', label:'School corridor', prompt:'school lockers and bulletin boards lining a long corridor, fluorescent ceiling lights' },
  { value:'bokeh', label:'Minimal — bokeh', prompt:'minimal, shallow depth of field bokeh background, soft circular light orbs' },
  { value:'sakura-lanterns', label:'Sakura + lanterns', prompt:'cherry blossom petals drifting in the air, paper lanterns hanging above, soft glow' },
  { value:'han-river', label:'Han River Seoul night', prompt:'Han River visible in background, Seoul night skyline with city lights reflecting on water' },
  { value:'graffiti-wall', label:'Tembok graffiti', prompt:'colorful graffiti-covered concrete wall behind, spray paint murals, urban street art' },
  { value:'train-tracks', label:'Rel kereta', prompt:'abandoned train tracks stretching into the distance, overgrown weeds between rails, rusty signal post' },
  { value:'pasar-malam', label:'Pasar malam', prompt:'Indonesian night market stalls with colorful tent covers and string lights, crowd silhouettes in background' },
  { value:'sawah', label:'Sawah padi', prompt:'terraced rice paddy fields stretching behind, lush green stalks, distant mountains, rural Indonesian landscape' },
  { value:'parkiran-kosong', label:'Parkiran kosong', prompt:'empty parking lot at night, lone overhead fluorescent lamp, painted parking lines on asphalt' },
  { value:'construction', label:'Konstruksi / reruntuhan', prompt:'partially constructed building with exposed rebar and concrete, construction debris, urban decay' },
  { value:'apartment-window', label:'Jendela apartemen', prompt:'view from apartment window visible behind, city lights and buildings through glass, interior room reflection' },
  { value:'underpass', label:'Kolong jembatan', prompt:'underneath a highway overpass bridge, concrete pillars, occasional car headlights passing above, echo-prone space' },
  { value:'taman-kota', label:'Taman kota malam', prompt:'city park at night, ornamental pathway lights, dark trees silhouetted, empty walking path' },
];

export const TOD_OPTIONS = [
  { value:'late-night', label:'Late night', prompt:'late night, dark sky, fluorescent store lighting and warm streetlamps' },
  { value:'golden-hour', label:'Golden hour sunset', prompt:'golden hour sunset, warm orange-amber sky, long dramatic shadows' },
  { value:'blue-hour', label:'Blue hour twilight', prompt:'blue hour twilight, deep indigo sky, first stars appearing, ambient city glow on horizon' },
  { value:'midday', label:'Midday overcast', prompt:'midday overcast, flat diffused moody light, no harsh shadows' },
  { value:'dawn', label:'Dawn', prompt:'dawn, soft pink-orange horizon, early quiet, first light touching surfaces' },
  { value:'stormy', label:'Stormy evening', prompt:'stormy evening, dark dramatic clouds, heavy wind, occasional lightning flash' },
  { value:'midnight', label:'Midnight gelap', prompt:'deep midnight, very dark with minimal artificial light, only faint ambient glow from distant sources' },
  { value:'neon-night', label:'Neon-lit night', prompt:'night illuminated entirely by neon signs and LED billboards, vibrant artificial color wash on faces' },
  { value:'afternoon', label:'Afternoon cerah', prompt:'bright afternoon, direct warm sunlight, vivid natural colors, sharp defined shadows' },
  { value:'magic-hour', label:'Magic hour (post-sunset)', prompt:'magic hour just after sunset, sky gradient from deep orange to purple, ambient warm glow without direct sun' },
  { value:'candlelit', label:'Candlelit / lilin', prompt:'dim candlelit environment, warm orange flickering light from candle flames, deep shadows on faces' },
  { value:'fluorescent-cold', label:'Fluorescent dingin', prompt:'cold harsh fluorescent tube lighting, slightly greenish-white cast, institutional clinical atmosphere' },
];

/** Flatten scene presets with group for SearchableSelect */
const SCENE_OPTIONS = SCENE_PRESETS.map(p => {
  const groupLabel = p.group === 'indonesia' ? '🇮🇩 Indonesia Vibes' : p.group === 'cinematic' ? '🎬 Cinematic' : '✨ Fantasy / Anime';
  return { value: p.id, label: p.label, group: groupLabel };
});

export default function SceneSection() {
  const { state, dispatch } = useBuilder();

  return (
    <section className="stitch-card flex flex-col gap-2">
      <h2 className="text-xs font-semibold uppercase tracking-[0.05em] text-sage-secondary mb-1">
        Location &amp; Setting
      </h2>

      <div className="flex flex-col gap-3">
        {/* Scene preset — searchable */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-forest-muted">Scene preset</label>
          <SearchableSelect
            value={state.scenePresetId}
            onValueChange={v => dispatch({ type: 'APPLY_SCENE_PRESET', presetId: v })}
            options={SCENE_OPTIONS}
            placeholder="Pilih scene..."
          />
        </div>

        {/* Custom detail */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-forest-muted">Custom detail (opsional)</label>
          <input
            type="text"
            value={state.sceneCustomDetail}
            onChange={e => dispatch({ type: 'SET_SCENE_FIELD', field: 'sceneCustomDetail', value: e.target.value })}
            placeholder="Add specific details..."
            className="stitch-input"
          />
        </div>

        {/* Time of day + Weather */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-forest-muted">Time of day</label>
            <Select value={state.tod} onValueChange={v => dispatch({ type: 'SET_SCENE_FIELD', field: 'tod', value: v })}>
              <SelectTrigger><SelectValue options={TOD_OPTIONS} /></SelectTrigger>
              <SelectContent>
                {TOD_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm text-forest-muted">Weather</label>
            <Select value={state.weather} onValueChange={v => dispatch({ type: 'SET_SCENE_FIELD', field: 'weather', value: v })}>
              <SelectTrigger><SelectValue options={WEATHER_OPTIONS} /></SelectTrigger>
              <SelectContent>
                {WEATHER_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Furniture — searchable */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-forest-muted">Furniture / seating</label>
          <SearchableSelect
            value={state.furniture}
            onValueChange={v => dispatch({ type: 'SET_SCENE_FIELD', field: 'furniture', value: v })}
            options={FURNITURE_OPTIONS}
          />
        </div>

        {/* Food — searchable */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-forest-muted">Food &amp; drinks on table</label>
          <SearchableSelect
            value={state.food}
            onValueChange={v => dispatch({ type: 'SET_SCENE_FIELD', field: 'food', value: v })}
            options={FOOD_OPTIONS.map(f => ({ value: f.value, label: f.label, group: f.group }))}
          />
        </div>

        {/* Background — searchable */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-forest-muted">Background props</label>
          <SearchableSelect
            value={state.bgProps}
            onValueChange={v => dispatch({ type: 'SET_SCENE_FIELD', field: 'bgProps', value: v })}
            options={BG_OPTIONS}
          />
        </div>
      </div>
    </section>
  );
}
