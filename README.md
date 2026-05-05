# AC UDP Telemetry Receiver

A Max/MSP patch for receiving real-time telemetry data from Assetto Corsa racing simulator via UDP protocol.

## Overview

This project provides a complete solution for integrating Assetto Corsa telemetry data into Max/MSP. It captures detailed vehicle telemetry including speed, acceleration, tire performance, suspension data, and lap information through a UDP connection.

## Features

- **Real-time UDP Telemetry**: Receives continuous telemetry updates from Assetto Corsa
- **Comprehensive Data Support**: Processes 84+ telemetry fields including:
  - Vehicle speed (km/h, mph, m/s)
  - Acceleration (G-forces)
  - Tire data (slip, speed, temperature, load)
  - Suspension information
  - Lap timing and position
  - Engine parameters
  - Vehicle dynamics data

- **Message Distribution**: Uses Max named receive objects for clean, organized data flow
- **Efficient Processing**: Optimized to prevent queue overflow during high-frequency updates

## System Requirements

- **Max**: Version 9.1.2 or later (tested and confirmed on Windows 9.1.2)
- **Operating System**: Windows (tested on Windows with Max 9.1.2)
- **Assetto Corsa**: Racing simulator with UDP telemetry enabled
- **Node.js Integration**: Requires Max Node.js externals

## Installation

1. Copy all files to your Max patches folder
2. Ensure Assetto Corsa UDP telemetry is enabled and configured to send to `127.0.0.1:9996`
3. Open the main patch file (monitor.maxpat or telemetry.maxpat) in Max
4. Start sending telemetry from Assetto Corsa

## File Descriptions

### Core Files

- **ac-remote-telemetry.js**: Node.js script that handles UDP socket communication with Assetto Corsa. Receives binary telemetry packets and parses vehicle dynamics data, then outputs all data fields to the main patch.

- **ac-messnamed.js**: Max JavaScript object that distributes incoming telemetry values to named receive objects. This allows any patch to receive specific telemetry values using receive objects (e.g., `[r speed_kmh]`).

- **monitor.maxpat**: Monitoring and visualization patch for real-time telemetry display

- **telemetry.maxpat**: Main telemetry receiver and data distribution patch

## UDP Protocol

The UDP connection uses the Assetto Corsa remote telemetry protocol:

- **IP**: 127.0.0.1
- **Port**: 9996
- **Protocol**: Binary format (little-endian)
- **Update Rate**: ~30 Hz
- **Handshake**: Required at startup (3 x 32-bit integers)
- **Subscription**: Requires subscription message (ID = 1)

For complete protocol specification, see: [Assetto Corsa Remote Telemetry Documentation](https://docs.google.com/document/d/1KfkZiIluXZ6mMhLWfDX1qAGbvhGRC3ZUzjVIt5FQpp4/pub)

## Compatibility

This patch has been verified to work correctly with:
- Max 9.1.2 on Windows

## References

This implementation is based on the Assetto Corsa Remote Telemetry protocol specification documented at:
[Assetto Corsa Remote Telemetry Documentation](https://docs.google.com/document/d/1KfkZiIluXZ6mMhLWfDX1qAGbvhGRC3ZUzjVIt5FQpp4/pub)
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

MIT License permits:
- ✓ Commercial use
- ✓ Modification
- ✓ Distribution
- ✓ Private use

Under the condition that you include the license and copyright notice.