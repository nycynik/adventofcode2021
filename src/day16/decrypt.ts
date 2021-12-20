import chalk from "chalk"

class Packet {
    version: number
    type: number
    expectedPackets: number
    expectedBits: number
    value: number

    constructor(version:number, type:number, expectedPackets: number, expectedBits: number, value = 0) {
        this.version = version
        this.type = type
        this.expectedPackets = expectedPackets
        this.expectedBits = expectedBits
        this.value = value
      }   
}

const packetType4decrypt = (packet: string): Array<any> => {
    let message = ''
    let last = false
    let index = 0

    while (!last && index < 1000) { // index check is just to prevent infinite loop
        if (packet[index++] === '0') {
            last = true
        }
        message += packet.substring(index, index + 4)
        index += 4
    }
    //console.log(last, message, packet, packet[index])
    return [message, index]
}

const operatorTypeDecrypt = (packet: string): Array<any> => {
    let index = 0
    const decoded = [ -1, -1, 0]

    const lenghtType = parseInt(packet[index++])
    if (lenghtType === 0) {
        /* If the length type ID is 0, then the next 15 bits are a number that 
           represents the total length in bits of the sub-packets contained by this packet. */
        decoded[0] = parseInt(packet.substring(index, index + 15), 2)
        index += 15
    } else {
        /* If the length type ID is 1, then the next 11 bits are a number that 
           represents the number of sub-packets immediately contained by this packet. */
        decoded[1] = parseInt(packet.substring(index, index + 11), 2)
        index += 11
    }
    decoded[2] = index
    return decoded
}

const packetDecrypt = (packet: string, subPacketLength=0, allPackets: Array<Packet> = []): Array<Packet> => {
    let index = 0
    let numPacketsExpected = 1
    let sumPacketVersions = 0
    let burntSpace = 0

    console.log(chalk.cyan(`decrypting: ${packet}`))
    while (index < packet.length && (subPacketLength > 0 || numPacketsExpected > 0)) {

        const packetVersion = parseInt(packet.substring(index, index + 3), 2)
        index += 3
        sumPacketVersions += packetVersion

        //console.log(packet.substring(index, index + 3), parseInt(packet.substring(index, index + 3), 2))
        const packetType = parseInt(packet.substring(index, index + 3), 2)
        index += 3

        let decryptedPacket = new Array<any>()
        
        if (numPacketsExpected > 0)
            numPacketsExpected -= 1

        switch (packetType) {
            case 4: // literal value
                decryptedPacket = packetType4decrypt(packet.substring(index))
                index += decryptedPacket[1]
                subPacketLength -= decryptedPacket[1] + 6
                allPackets.push(new Packet(packetVersion, packetType, 0, decryptedPacket[1], parseInt(decryptedPacket[0], 2)))
                console.log(`found a literal '${parseInt(decryptedPacket[0], 2)}' Len: ${subPacketLength} Remaining Packets: ${numPacketsExpected}[${packetVersion} ${sumPacketVersions}]`)
                break;
            default: // operator packet
                decryptedPacket = operatorTypeDecrypt(packet.substring(index))
                index += decryptedPacket[2]
                
                if (decryptedPacket[0] === -1) {
                    numPacketsExpected += decryptedPacket[1]
                    console.log(`found a operator ${packetType} Remaining Len: ${subPacketLength} Remaining Packets: ${numPacketsExpected} [${packetVersion} ${sumPacketVersions}]`)
                    allPackets.push(new Packet(packetVersion, packetType, decryptedPacket[1], 0))
                } else {
                    burntSpace = decryptedPacket[0]
                    allPackets.push(new Packet(packetVersion, packetType, 0, decryptedPacket[0]))
                    console.log(`found a operator ${packetType} Remaining Len: ${burntSpace} Remaining Packets: ${numPacketsExpected} [${packetVersion} ${sumPacketVersions}]`)
                    const results = packetDecrypt(packet.substring(index, index + burntSpace), burntSpace, allPackets)
                    index += burntSpace
                    subPacketLength -= burntSpace
                }
                break;
        }
    }

    return allPackets
}

function hex2PaddedBin(hex: string) {
    let paddedBin = ''
    for (const digit of hex) {
        paddedBin += hex2bin(digit)
    }
    return paddedBin;
}

function hex2bin(hex:string){
    return (parseInt(hex, 16).toString(2)).padStart(8, '0').substring(4);
}
export { packetDecrypt, hex2PaddedBin, packetType4decrypt, operatorTypeDecrypt, Packet }