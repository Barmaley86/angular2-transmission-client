export class Remote {
  public 'alt-speed-down': number;
  public 'alt-speed-enabled': boolean;
  public 'alt-speed-time-begin': number;
  public 'alt-speed-time-enabled': boolean;
  public 'alt-speed-time-end': number;
  public 'alt-speed-time-day': number;
  public 'alt-speed-up': number;
  public 'blocklist-url': string;
  public 'blocklist-enabled': boolean;
  public 'blocklist-size': number;
  public 'cache-size-mb': number;
  public 'config-dir': string;
  public 'download-dir': string;
  public 'download-queue-size': number;
  public 'download-queue-enabled': boolean;
  public 'dht-enabled': boolean;
  public 'encryption': string;
  public 'idle-seeding-limit': number;
  public 'idle-seeding-limit-enabled': boolean;
  public 'incomplete-dir': string;
  public 'incomplete-dir-enabled': boolean;
  public 'lpd-enabled': boolean;
  public 'peer-limit-global': number;
  public 'peer-limit-per-torrent': number;
  public 'pex-enabled': boolean;
  public 'peer-port': number;
  public 'peer-port-random-on-start': boolean;
  public 'port-forwarding-enabled': boolean;
  public 'queue-stalled-enabled': boolean;
  public 'queue-stalled-minutes': number;
  public 'rename-partial-files': boolean;
  public 'rpc-version': number;
  public 'rpc-version-minimum': number;
  public 'script-torrent-done-filename': string;
  public 'script-torrent-done-enabled': boolean;
  //public 'seedRatioLimit': double;
  public 'seedRatioLimited': boolean;
  public 'seed-queue-size': number;
  public 'seed-queue-enabled': boolean;
  public 'speed-limit-down': number;
  public 'speed-limit-down-enabled': boolean;
  public 'speed-limit-up': number;
  public 'speed-limit-up-enabled': boolean;
  public 'start-added-torrents': boolean;
  public 'trash-original-torrent-files': boolean;
  //public 'units': object;
  public 'utp-enabled': boolean;
  public 'version': string; 

  constructor(data: any) {
    this['alt-speed-down'] = data['alt-speed-down'];
    this['alt-speed-enabled'] = data['alt-speed-enabled'];
    this['alt-speed-time-begin'] = data['alt-speed-time-begin'];
    this['alt-speed-time-enabled'] = data['alt-speed-time-enabled'];
    this['alt-speed-time-end'] = data['alt-speed-time-end'];
    this['alt-speed-time-day'] = data['alt-speed-time-day'];
    this['alt-speed-up'] = data['alt-speed-up'];
    this['blocklist-url'] = data['blocklist-url'];
    this['blocklist-enabled'] = data['blocklist-enabled'];
    this['blocklist-size'] = data['blocklist-size'];
    this['cache-size-mb'] = data['cache-size-mb'];
    this['config-dir'] = data['config-dir'];
    this['download-dir'] = data['download-dir'];
    this['download-queue-size'] = data['download-queue-size'];
    this['download-queue-enabled'] = data['download-queue-enabled'];
    this['dht-enabled'] = data['dht-enabled'];
    this['encryption'] = data['encryption'];
    this['idle-seeding-limit'] = data['idle-seeding-limit'];
    this['idle-seeding-limit-enabled'] = data['idle-seeding-limit-enabled'];
    this['incomplete-dir'] = data['incomplete-dir'];
    this['incomplete-dir-enabled'] = data['incomplete-dir-enabled'];
    this['lpd-enabled'] = data['lpd-enabled'];
    this['peer-limit-global'] = data['peer-limit-global'];
    this['peer-limit-per-torrent'] = data['peer-limit-per-torrent'];
    this['pex-enabled'] = data['pex-enabled'];
    this['peer-port'] = data['peer-port'];
    this['peer-port-random-on-start'] = data['peer-port-random-on-start'];
    this['port-forwarding-enabled'] = data['port-forwarding-enabled'];
    this['queue-stalled-enabled'] = data['queue-stalled-enabled'];
    this['queue-stalled-minutes'] = data['queue-stalled-minutes'];
    this['rename-partial-files'] = data['rename-partial-files'];
    this['rpc-version'] = data['rpc-version'];
    this['rpc-version-minimum'] = data['rpc-version-minimum'];
    this['script-torrent-done-filename'] = data['script-torrent-done-filename'];
    this['script-torrent-done-enabled'] = data['script-torrent-done-enabled'];
    //this['seedRatioLimit'] = data['seedRatioLimit'];
    this['seedRatioLimited'] = data['seedRatioLimited'];
    this['seed-queue-size'] = data['seed-queue-size'];
    this['seed-queue-enabled'] = data['seed-queue-enabled'];
    this['speed-limit-down'] = data['speed-limit-down'];
    this['speed-limit-down-enabled'] = data['speed-limit-down-enabled'];
    this['speed-limit-up'] = data['speed-limit-up'];
    this['speed-limit-up-enabled'] = data['speed-limit-up-enabled'];
    this['start-added-torrents'] = data['start-added-torrents'];
    this['trash-original-torrent-files'] = data['trash-original-torrent-files'];
    //this['units'] = data['units'];
    this['utp-enabled'] = data['utp-enabled'];
    this['version'] = data['version'];
  }
}