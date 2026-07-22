(function () {

var module = {
    exports: null
};

// For questions about the turkish hyphenation patterns ask
// Andreas Lappe nd at off-pist dot de
module.exports = {
	'id': 'tr',
	'leftmin': 2,
	'rightmin': 2,
	'patterns': {
		3 : "2a12â12e12ı12i12î12o12ö12u12ü12û11b11c11ç11d11f11g11ğ11h11j11k11l11m11n11p11r11s11ş11t11v11y11z12bb2bc2bç2bd2bf2bg2bğ2bh2bj2bk2bl2bm2bn2bp2br2bs2bş2bt2bv2by2bz2cb2cc2cç2cd2cf2cg2cğ2ch2cj2ck2cl2cm2cn2cp2cr2cs2cş2ct2cv2cy2cz2çb2çc2çç2çd2çf2çg2çğ2çh2çj2çk2çl2çm2çn2çp2çr2çs2çş2çt2çv2çy2çz2db2dc2dç2dd2df2dg2dğ2dh2dj2dk2dl2dm2dn2dp2dr2ds2dş2dt2dv2dy2dz2fb2fc2fç2fd2ff2fg2fğ2fh2fj2fk2fl2fm2fn2fp2fr2fs2fş2ft2fv2fy2fz2gb2gc2gç2gd2gf2gg2gğ2gh2gj2gk2gl2gm2gn2gp2gr2gs2gş2gt2gv2gy2gz2ğb2ğc2ğç2ğd2ğf2ğg2ğğ2ğh2ğj2ğk2ğl2ğm2ğn2ğp2ğr2ğs2ğş2ğt2ğv2ğy2ğz2hb2hc2hç2hd2hf2hg2hğ2hh2hj2hk2hl2hm2hn2hp2hr2hs2hş2ht2hv2hy2hz2jb2jc2jç2jd2jf2jg2jğ2jh2jj2jk2jl2jm2jn2jp2jr2js2jş2jt2jv2jy2jz2kb2kc2kç2kd2kf2kg2kğ2kh2kj2kk2kl2km2kn2kp2kr2ks2kş2kt2kv2ky2kz2lb2lc2lç2ld2lf2lg2lğ2lh2lj2lk2ll2lm2ln2lp2lr2ls2lş2lt2lv2ly2lz2mb2mc2mç2md2mf2mg2mğ2mh2mj2mk2ml2mm2mn2mp2mr2ms2mş2mt2mv2my2mz2nb2nc2nç2nd2nf2ng2nğ2nh2nj2nk2nl2nm2nn2np2nr2ns2nş2nt2nv2ny2nz2pb2pc2pç2pd2pf2pg2pğ2ph2pj2pk2pl2pm2pn2pp2pr2ps2pş2pt2pv2py2pz2rb2rc2rç2rd2rf2rg2rğ2rh2rj2rk2rl2rm2rn2rp2rr2rs2rş2rt2rv2ry2rz2sb2sc2sç2sd2sf2sg2sğ2sh2sj2sk2sl2sm2sn2sp2sr2ss2sş2st2sv2sy2sz2şb2şc2şç2şd2şf2şg2şğ2şh2şj2şk2şl2şm2şn2şp2şr2şs2şş2şt2şv2şy2şz2tb2tc2tç2td2tf2tg2tğ2th2tj2tk2tl2tm2tn2tp2tr2ts2tş2tt2tv2ty2tz2vb2vc2vç2vd2vf2vg2vğ2vh2vj2vk2vl2vm2vn2vp2vr2vs2vş2vt2vv2vy2vz2yb2yc2yç2yd2yf2yg2yğ2yh2yj2yk2yl2ym2yn2yp2yr2ys2yş2yt2yv2yy2yz2zb2zc2zç2zd2zf2zg2zğ2zh2zj2zk2zl2zm2zn2zp2zr2zs2zş2zt2zv2zy2zz",
		4 : "a3a2a3â2a3e2a3ı2a3i2a3î2a3o2a3ö2a3u2a3ü2a3û2â3a2â3â2â3e2â3ı2â3i2â3î2â3o2â3ö2â3u2â3ü2â3û2e3a2e3â2e3e2e3ı2e3i2e3î2e3o2e3ö2e3u2e3ü2e3û2ı3a2ı3â2ı3e2ı3ı2ı3i2ı3î2ı3o2ı3ö2ı3u2ı3ü2ı3û2i3a2i3â2i3e2i3ı2i3i2i3î2i3o2i3ö2i3u2i3ü2i3û2î3a2î3â2î3e2î3ı2î3i2î3î2î3o2î3ö2î3u2î3ü2î3û2o3a2o3â2o3e2o3ı2o3i2o3î2o3o2o3ö2o3u2o3ü2o3û2ö3a2ö3â2ö3e2ö3ı2ö3i2ö3î2ö3o2ö3ö2ö3u2ö3ü2ö3û2u3a2u3â2u3e2u3ı2u3i2u3î2u3o2u3ö2u3u2u3ü2u3û2ü3a2ü3â2ü3e2ü3ı2ü3i2ü3î2ü3o2ü3ö2ü3u2ü3ü2ü3û2û3a2û3â2û3e2û3ı2û3i2û3î2û3o2û3ö2û3u2û3ü2û3û2",
		6 : "tu4r4k",
		7 : "2e2cek_m1t4rak"
	}
};
if (typeof window['Hypher'] === 'undefined') {
    throw new Error('Hypher is not loaded. Include hypher.js before this file.');
}

var h = new window['Hypher'](module.exports);

if (typeof module.exports.id === 'string') {
    module.exports.id = [module.exports.id];
}

for (var i = 0; i < module.exports.id.length; i += 1) {
  window['Hypher']['languages'][module.exports.id[i]] = h;
}
}());
