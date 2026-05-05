// ac-messnamed.js  — Max js オブジェクト
// node.script からのリストを受け取り、messnamed で各フィールドを配信する
// 使い方: どのパッチでも [receive speed_kmh] / [r speed_kmh] で受信可能

inlets = 1;
outlets = 0;

var FIELDS = [
    'speed_kmh', 'speed_mph', 'speed_ms',
    'abs_enabled', 'abs_in_action', 'tc_in_action', 'tc_enabled', 'in_pit', 'engine_limiter',
    'accG_vertical', 'accG_horizontal', 'accG_frontal',
    'lap_time', 'last_lap', 'best_lap', 'lap_count',
    'gas', 'brake', 'clutch', 'engine_rpm', 'steer', 'gear', 'cg_height',
    'wheel_speed_fl', 'wheel_speed_fr', 'wheel_speed_rl', 'wheel_speed_rr',
    'slip_angle_fl', 'slip_angle_fr', 'slip_angle_rl', 'slip_angle_rr',
    'slip_angle_cp_fl', 'slip_angle_cp_fr', 'slip_angle_cp_rl', 'slip_angle_cp_rr',
    'slip_ratio_fl', 'slip_ratio_fr', 'slip_ratio_rl', 'slip_ratio_rr',
    'tyre_slip_fl', 'tyre_slip_fr', 'tyre_slip_rl', 'tyre_slip_rr',
    'nd_slip_fl', 'nd_slip_fr', 'nd_slip_rl', 'nd_slip_rr',
    'load_fl', 'load_fr', 'load_rl', 'load_rr',
    'dy_fl', 'dy_fr', 'dy_rl', 'dy_rr',
    'mz_fl', 'mz_fr', 'mz_rl', 'mz_rr',
    'tyre_dirty_fl', 'tyre_dirty_fr', 'tyre_dirty_rl', 'tyre_dirty_rr',
    'camber_fl', 'camber_fr', 'camber_rl', 'camber_rr',
    'tyre_radius_fl', 'tyre_radius_fr', 'tyre_radius_rl', 'tyre_radius_rr',
    'tyre_loaded_radius_fl', 'tyre_loaded_radius_fr', 'tyre_loaded_radius_rl', 'tyre_loaded_radius_rr',
    'suspension_fl', 'suspension_fr', 'suspension_rl', 'suspension_rr',
    'car_pos_normalized', 'car_slope', 'car_x', 'car_y', 'car_z'
];

function list() {
    var args = arrayfromargs(arguments);
    for (var i = 0; i < args.length && i < FIELDS.length; i++) {
        messnamed(FIELDS[i], args[i]);
    }
}
