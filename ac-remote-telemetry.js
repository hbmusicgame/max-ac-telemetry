const dgram = require('dgram');
const Max = require('max-api');

const UDP_IP = '127.0.0.1';
const UDP_PORT = 9996;

Max.post('AC Remote Telemetry (full) loaded');

const socket = dgram.createSocket('udp4');

const handshake = Buffer.alloc(12);
handshake.writeInt32LE(0, 0);
handshake.writeInt32LE(0, 4);
handshake.writeInt32LE(0, 8);
socket.send(handshake, UDP_PORT, UDP_IP);

const subscribe = Buffer.alloc(12);
subscribe.writeInt32LE(0, 0);
subscribe.writeInt32LE(0, 4);
subscribe.writeInt32LE(1, 8);
socket.send(subscribe, UDP_PORT, UDP_IP);

Max.post('Subscribed to AC telemetry');

const f   = (buf, off) => buf.readFloatLE(off);
const i32 = (buf, off) => buf.readInt32LE(off);
const i8  = (buf, off) => buf.readInt8(off);

let latestMsg = null;

socket.on('message', (msg) => {
    if (msg.length < 328) return;
    latestMsg = Buffer.from(msg);
});

// 1フレーム 1回だけ Max.outlet() を呼ぶ (queue overflow 防止)
setInterval(() => {
    if (!latestMsg) return;
    const msg = latestMsg;
    latestMsg = null;

    Max.outlet(
        // [0-2] Speed
        f(msg,   8),   // speed_kmh
        f(msg,  12),   // speed_mph
        f(msg,  16),   // speed_ms
        // [3-8] Flags
        i8(msg, 20),   // abs_enabled
        i8(msg, 21),   // abs_in_action
        i8(msg, 22),   // tc_in_action
        i8(msg, 23),   // tc_enabled
        i8(msg, 24),   // in_pit
        i8(msg, 25),   // engine_limiter
        // [9-11] G-Force
        f(msg,  28),   // accG_vertical
        f(msg,  32),   // accG_horizontal
        f(msg,  36),   // accG_frontal
        // [12-15] Lap
        i32(msg, 40),  // lap_time
        i32(msg, 44),  // last_lap
        i32(msg, 48),  // best_lap
        i32(msg, 52),  // lap_count
        // [16-22] Controls
        f(msg,  56),   // gas
        f(msg,  60),   // brake
        f(msg,  64),   // clutch
        f(msg,  68),   // engine_rpm
        f(msg,  72),   // steer
        i32(msg, 76),  // gear
        f(msg,  80),   // cg_height
        // [23-26] Wheel Angular Speed
        f(msg,  84),   // wheel_speed_fl
        f(msg,  88),   // wheel_speed_fr
        f(msg,  92),   // wheel_speed_rl
        f(msg,  96),   // wheel_speed_rr
        // [27-30] Slip Angle
        f(msg, 100),   // slip_angle_fl
        f(msg, 104),   // slip_angle_fr
        f(msg, 108),   // slip_angle_rl
        f(msg, 112),   // slip_angle_rr
        // [31-34] Slip Angle Contact Patch
        f(msg, 116),   // slip_angle_cp_fl
        f(msg, 120),   // slip_angle_cp_fr
        f(msg, 124),   // slip_angle_cp_rl
        f(msg, 128),   // slip_angle_cp_rr
        // [35-38] Slip Ratio
        f(msg, 132),   // slip_ratio_fl
        f(msg, 136),   // slip_ratio_fr
        f(msg, 140),   // slip_ratio_rl
        f(msg, 144),   // slip_ratio_rr
        // [39-42] Tyre Slip
        f(msg, 148),   // tyre_slip_fl
        f(msg, 152),   // tyre_slip_fr
        f(msg, 156),   // tyre_slip_rl
        f(msg, 160),   // tyre_slip_rr
        // [43-46] ND Slip
        f(msg, 164),   // nd_slip_fl
        f(msg, 168),   // nd_slip_fr
        f(msg, 172),   // nd_slip_rl
        f(msg, 176),   // nd_slip_rr
        // [47-50] Load
        f(msg, 180),   // load_fl
        f(msg, 184),   // load_fr
        f(msg, 188),   // load_rl
        f(msg, 192),   // load_rr
        // [51-54] Dy (lateral tyre force)
        f(msg, 196),   // dy_fl
        f(msg, 200),   // dy_fr
        f(msg, 204),   // dy_rl
        f(msg, 208),   // dy_rr
        // [55-58] Mz (self-aligning torque)
        f(msg, 212),   // mz_fl
        f(msg, 216),   // mz_fr
        f(msg, 220),   // mz_rl
        f(msg, 224),   // mz_rr
        // [59-62] Tyre Dirty Level
        f(msg, 228),   // tyre_dirty_fl
        f(msg, 232),   // tyre_dirty_fr
        f(msg, 236),   // tyre_dirty_rl
        f(msg, 240),   // tyre_dirty_rr
        // [63-66] Camber
        f(msg, 244),   // camber_fl
        f(msg, 248),   // camber_fr
        f(msg, 252),   // camber_rl
        f(msg, 256),   // camber_rr
        // [67-70] Tyre Radius
        f(msg, 260),   // tyre_radius_fl
        f(msg, 264),   // tyre_radius_fr
        f(msg, 268),   // tyre_radius_rl
        f(msg, 272),   // tyre_radius_rr
        // [71-74] Tyre Loaded Radius
        f(msg, 276),   // tyre_loaded_radius_fl
        f(msg, 280),   // tyre_loaded_radius_fr
        f(msg, 284),   // tyre_loaded_radius_rl
        f(msg, 288),   // tyre_loaded_radius_rr
        // [75-78] Suspension Height
        f(msg, 292),   // suspension_fl
        f(msg, 296),   // suspension_fr
        f(msg, 300),   // suspension_rl
        f(msg, 304),   // suspension_rr
        // [79-83] Position
        f(msg, 308),   // car_pos_normalized
        f(msg, 312),   // car_slope
        f(msg, 316),   // car_x
        f(msg, 320),   // car_y
        f(msg, 324)    // car_z
    );
}, 33);
