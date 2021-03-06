# _patches
Private patches for the official ports.

## gettext-tools-x.x.x.diff
A patch for devel/gettext-tools to make it handle JavaScript template strings correctly.  
Just imported the upstream patch for [bug 56678](https://savannah.gnu.org/bugs/?56678).  
It is required to update translations for Joplin.

## omegaT-x.x.x.diff
A patch for editors/omegaT to upgrade the version from 3.6.0 to 4.3.0. This patch avoids gradle bulid by using distributed jars.

## onedrive-x.x.x.diff
A patch for net/onedrive to upgrade the version from 2.3.3_1 to [2.3.9](https://github.com/abraunegg/onedrive/releases/tag/v2.3.9) etc.

## p5-Net-Proxy-x.x.x.diff
An experimental patch for net/p5-Net-Proxy to add IPv6 and libwrap support to tcp connector.  
With this patch, security/p5-Authen-Libwrap is added to build/run dependency.
