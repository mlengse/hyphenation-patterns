(function () {

var module = {
    exports: null
};

// Created based on sk-spell.sk.cx
// For questions about the slovak hyphenation patterns
// ask Zdenko Podobný (zdenop at gmail dot com)
module.exports = {
	'id': 'sk',
	'leftmin': 2,
	'rightmin': 2,
	'patterns': {
		2 : "a1á1ä1e1é1i1í1o1ó1ô1u1ú1y1ý1",
		3 : "i2ai2ái2ei2uo2uc2hd2zd2ž",
		4 : "2b1b2b1c2b1č2b1d2b1ď2b1f2b1g2b1h2b1j2b1k2b1l2b1ľ2b1m2b1n2b1ň2b1p2b1r2b1s2b1š2b1t2b1ť2b1v2b1w2b1x2b1z2b1ž2c1b2c1c2c1č2c1d2c1ď2c1f2c1g2c1j2c1k2c1l2c1ľ2c1m2c1n2c1ň2c1p2c1r2c1s2c1š2c1t2c1ť2c1v2c1w2c1x2c1z2c1ž2č1b2č1c2č1č2č1d2č1ď2č1f2č1g2č1h2č1j2č1k2č1l2č1ľ2č1m2č1n2č1ň2č1p2č1r2č1s2č1š2č1t2č1ť2č1v2č1w2č1x2č1z2č1ž2d1b2d1c2d1č2d1d2d1ď2d1f2d1g2d1h2d1j2d1k2d1l2d1ľ2d1m2d1n2d1ň2d1p2d1r2d1s2d1š2d1t2d1ť2d1v2ď1b2ď1c2ď1č2ď1d2ď1ď2ď1f2ď1g2ď1h2ď1j2ď1k2ď1l2ď1ľ2ď1m2ď1n2ď1ň2ď1p2ď1r2ď1s2ď1š2ď1t2ď1ť2ď1v2ď1z2ď1ž2f1b2f1c2f1č2f1d2f1ď2f1f2f1g2f1h2f1j2f1k2f1l2f1ľ2f1m2f1n2f1ň2f1p2f1r2f1s2f1š2f1t2f1ť2f1v2f1z2f1ž2g1b2g1c2g1č2g1d2g1ď2g1f2g1g2g1h2g1j2g1k2g1l2g1ľ2g1m2g1n2g1ň2g1p2g1r2g1s2g1š2g1t2g1ť2g1v2g1z2g1ž2h1b2h1c2h1č2h1d2h1ď2h1f2h1g2h1h2h1j2h1k2h1l2h1ľ2h1m2h1n2h1ň2h1p2h1r2h1s2h1š2h1t2h1ť2h1v2h1z2h1ž2j1b2j1c2j1č2j1d2j1ď2j1f2j1g2j1h2j1j2j1k2j1l2j1ľ2j1m2j1n2j1ň2j1p2j1r2j1s2j1š2j1t2j1ť2j1v2j1w2j1x2j1z2j1ž2k1b2k1c2k1č2k1d2k1ď2k1f2k1g2k1h2k1j2k1k2k1l2k1ľ2k1m2k1n2k1ň2k1p2k1r2k1s2k1š2k1t2k1ť2k1v2k1w2k1x2k1z2k1ž2l1b2l1c2l1č2l1d2l1ď2l1f2l1g2l1h2l1j2l1k2l1l2l1ľ2l1m2l1n2l1ň2l1p2l1r2l1s2l1š2l1t2l1ť2l1v2l1z2l1ž2ľ1b2ľ1c2ľ1č2ľ1d2ľ1ď2ľ1f2ľ1g2ľ1h2ľ1j2ľ1k2ľ1l2ľ1ľ2ľ1m2ľ1n2ľ1ň2ľ1p2ľ1r2ľ1s2ľ1š2ľ1t2ľ1ť2ľ1v2ľ1z2ľ1ž2m1b2m1c2m1č2m1d2m1ď2m1f2m1g2m1h2m1j2m1k2m1l2m1ľ2m1m2m1n2m1ň2m1p2m1r2m1s2m1š2m1t2m1ť2m1v2m1z2m1ž2n1b2n1c2n1č2n1d2n1ď2n1f2n1g2n1h2n1j2n1k2n1l2n1ľ2n1m2n1n2n1ň2n1p2n1r2n1s2n1š2n1t2n1ť2n1v2n1w2n1x2n1z2n1ž2ň1b2ň1c2ň1č2ň1d2ň1ď2ň1f2ň1g2ň1h2ň1j2ň1k2ň1l2ň1ľ2ň1m2ň1n2ň1ň2ň1p2ň1r2ň1s2ň1š2ň1t2ň1ť2ň1v2ň1z2ň1ž2p1b2p1c2p1č2p1d2p1ď2p1f2p1g2p1h2p1j2p1k2p1l2p1ľ2p1m2p1n2p1ň2p1p2p1r2p1s2p1š2p1t2p1ť2p1v2p1w2p1x2p1z2p1ž2r1b2r1c2r1č2r1d2r1ď2r1f2r1g2r1h2r1j2r1k2r1l2r1ľ2r1m2r1n2r1ň2r1p2r1r2r1s2r1š2r1t2r1ť2r1v2r1w2r1x2r1z2r1ž2s1b2s1c2s1č2s1d2s1ď2s1f2s1g2s1h2s1j2s1k2s1l2s1ľ2s1m2s1n2s1ň2s1p2s1r2s1s2s1š2s1t2s1ť2s1v2s1z2s1ž2š1b2š1c2š1č2š1d2š1ď2š1f2š1g2š1h2š1j2š1k2š1l2š1ľ2š1m2š1n2š1ň2š1p2š1r2š1s2š1š2š1t2š1ť2š1v2š1w2š1x2š1z2š1ž2t1b2t1c2t1č2t1d2t1ď2t1f2t1g2t1h2t1j2t1k2t1l2t1ľ2t1m2t1n2t1ň2t1p2t1r2t1s2t1š2t1t2t1ť2t1v2t1w2t1x2t1z2t1ž2ť1b2ť1c2ť1č2ť1d2ť1ď2ť1f2ť1g2ť1h2ť1j2ť1k2ť1l2ť1ľ2ť1m2ť1n2ť1ň2ť1p2ť1r2ť1s2ť1š2ť1t2ť1ť2ť1v2ť1w2ť1x2ť1z2ť1ž2v1b2v1c2v1č2v1d2v1ď2v1f2v1g2v1h2v1j2v1k2v1l2v1ľ2v1m2v1n2v1ň2v1p2v1r2v1s2v1š2v1t2v1ť2v1v2v1w2v1x2v1z2v1ž2z1b2z1c2z1č2z1d2z1ď2z1f2z1g2z1h2z1j2z1k2z1l2z1ľ2z1m2z1n2z1ň2z1p2z1r2z1s2z1š2z1t2z1ť2z1v2z1z2z1ž2ž1b2ž1c2ž1č2ž1d2ž1ď2ž1f2ž1g2ž1h2ž1j2ž1k2ž1l2ž1ľ2ž1m2ž1n2ž1ň2ž1p2ž1r2ž1s2ž1š2ž1t2ž1ť2ž1v2ž1z2ž1ž2x1t2x1n2b1ŕ2ŕ1ba1í2a1o2e1á2e1í2e1o2e1ó2e1u2i1o2o1a2o1e2o1i2o1o2u1a2u1á2u1i2u1í2u1o2u1u2y1a2y1e2y1ó2y1u2a2u1a2i1_vy5_vý5_cv6_ch6_sp6_st6_šk6_šp6_št6_tk6_uh6_uk6_um6_up6_us6_ús6_úš6_ut6_uv6_uz6_vd6_vh6_vk6_vp6_vs6_vš6_vt6_vz6_vž6_zb6_zg6_zh6_zm6_zr6_zv64lt_4rd_4st_4sť_",
		5 : "b2l3bb2l3šb2ľ3šb2r3db2r3zb3s2cb3s2tc3k2tc3t2vč2r3pd2l3nd2r3ld2r3nd3s2vd3s2td3v2rj3s2tj3t2mj3t2rk2r3bk3s2ľk2s3nk3t2rl3d2rľ3k2nl3t2rm3b2lm3b2ľm3b2rm3f2lm3f2rm3k2nm3p2lm3p2ľm3p2rm3p2sm2r3lm2r3šm2r3tm3s2tm3š2tn3dľan3d2rn3f2ln3f2rn3g2hn3g2ln3g2ľn2g3nn3g2rn3g2vn3k2cn3k2hn3k2nn3k2rn3k2vn3s2cn3š2pn3š2tn3t2gn3t2ln3t2nn3t2rn2ž3mp3š2ťp3t2rr2b3nr3g2ľr3g2rr3g2sr3k2dr2k3nr3k2tr3k2vr3p2cr3p2čr3p2rr3s2pr3š2čr3š2lr3š2rr2t3mr3t2nr2t3ňr3t2rr3t2vs2k3ls2k3ms2k3ns3k2rs3k2vs3p2rs3t2ks2t3ls3t2ms2t3ns3t2rs3t2vs2ť3hs2ť3ms2ť3pš3k2lš3k2rš3t2rt3k2lt3k2nt3h2lz3d2nz3g2nž2d3n3ž2ľtž3s2tx3p2lx3p2rx3t2rb3s4kd3s4kj3s4kl3s4kľ3s4kn3s4kp3s4kr3s4kš3s4kt3s4kv3s4kz3s4kž3s4kn2d3č_bez5_do5o_do5u_ge4o_o5p4_po5u5päť5_usk6_úsl6_usm6_úsm6_vzh6_vzk6_vzl6_vzp6_zd6n_zd6r_zd6v8c4h_8d4z_8d4ž_",
		6 : "2b1c2h2b1d2z2b1d2ž2c1c2h2c1d2z2c1d2ž2č1c2h2č1d2z2č1d2ž2d1c2h2d1d2z2d1d2ž2ď1c2h_atmo32ď1d2z2ď1d2ž2f1c2h2f1d2z2f1d2ž2g1c2h2g1d2z2g1d2ž2h1c2h2h1d2z2h1d2ž2c2h1b2c2h1c2c2h1č2c2h1d2c2h1ď2c2h1f2c2h1g2c2h1h2c2h1j2c2h1k2c2h1l2c2h1ľ2c2h1m2c2h1n2c2h1ň2c2h1p2c2h1r2c2h1s2c2h1š2c2h1t2c2h1ť2c2h1v2c2h1w2c2h1ž2j1c2h2j1d2z2j1d2ž2k1c2h2k1d2z2k1d2ž2l1c2h2l1d2z2l1d2ž2ľ1c2h2ľ1d2z2ľ1d2ž2m1c2h2m1d2z2m1d2ž2n1c2h2n1d2z2n1d2ž2ň1c2h2ň1d2z2ň1d2ž2p1c2h2p1d2z2p1d2ž2r1c2h2r1d2z2r1d2ž2s1c2h2s1d2z2s1d2ž2š1c2h2š1d2z2š1d2ž2t1c2h2t1d2z2t1d2ž2ť1c2h2ť1d2z2ť1d2ž2v1c2h2v1d2z2v1d2ž2z1c2h2z1d2z2z1d2ž2ž1c2h2ž1d2z2ž1d2ž2d2z1k2d2z1n2d2z1r2d2z1s2d2ž1š2d2z1ŕ2ŕ1d2z2d2z1ľ2ŕ1d2ž2d2ž1ľ3b2l3č3b2l3k3b2ľ3k3b2l3ň3b2r3b3b2r3k3b2ŕ3k3b2r3l3b2ŕ3ľ3b2r3n3b2r3ň3b2r3v3c2r3č3c2ŕ3č3c2r3k3c2ŕ3k3č2l3n3č2r3č3č2r3t3č2r3v3d2l3b3d2l3h3d2l3ž3d2ľ3ž3d2r3d3d2r3g3d2r3k3d2r3m3d2r3v3d2r3z3d2r3ž3d2ŕ3ž3f2r3č3f2r3f3f2r3k3f2ŕ3k3f2r3m3f2r3n3g2l3g3g2r3c3g2r3g3h2l3b3h2ľ3b3h2l3t3h2m2l3h2r3b3h2ŕ3b3h2r3č3h2r3d3h2r3k3h2r3m3h2r3n3h2r3ň3h2r3t3h2r3vj3š2le3k2l3b3k2ľ3b3k2l3č3k2l3z3k2ľ3z3k2r3č3k2ŕ3č3k2ŕ3d3k2r3k3k2ŕ3k3k2ŕ3m3k2r3p3k2r3s3k2r3t3k2r3v3m2l3č3m2l3k3m2r3h3m2r3k3m2r3v3m2r3z3m2ŕ3z3p2l3n3p2l3ň3p2ľ3ň3p2l3z3p2ľ3z3p2ľ3ž3p2ŕ3c3p2r3č3p2r3d3p2r3s3p2r3š3s2l3n3s2l3ň3s2l3z3s2r3d3s4ŕ3k3s4r3š3š4t4v3t2l3č3t2l3k3t4r3č3t4r3h3t2r3l3t2r3k3t2r3m3t2r3n3t2ŕ3n3t2ŕ3ň3t4r3p3t2r3v3t2ŕ3ž3v2l3č3v2ľ3č3v2l3h3v2l3k3v2l3n3v2r3h3v2r3l3v2ŕ3š3v2ŕ3t3v2r3z3v2ŕ3z3v4z4d3v4z4h3v4z4n3v3z2ť3z4d4r3z4d4v3z4h4r3z2r3k3z2r3n3z4v4l3ž2l3č3ž2l3t3ž2r3ď4m3s4kz3š2t2_belo5_bi2o5_biok4_biop4_bios4_bože5_b2z2d_c4t4n_čo5s4_de5f4_de5g4_dek4l_do5d4_do5f4_do5h4_do5i4_do5k4_do5p4_do5s4_do5v4_do5z4_do5ž4_ex5k4_foto5_ľ4s4t_m4z4d_na5a4_na5b4_na5c4_na5h4_na5i4_na5k4_na5m4_na5o4_na5p4_ná5p4_na5s4_ná5s4_na5š4_na5t4_na5u4_na5ú4_ná5u4_ná5ú4_na5ž4_ne5a4_ne5e4_ne5i4_ne5m4_ne5p4_ne5s4_ne5š4_ne5t4_ne5u2_ne5ú2_ne5v4_ni5k4_ob5k4_ob5s4_ob5t4_ob5z4_od5b4_od5c4_od5d4_od5f4_od5h4_od5i4_od5í4_od5k4_od5p4_od5s4_od5š4_od5t4_od5v4_od5z4_t4v4r_o5h4l_o5h4ľ_o5h4r_o5k4l_o5k4ľ_o5m4l_o5m4n_o5m4r_o5v4r_o5z4n_po5b4_po5č4_po5h4_po5i4_po5k4_po5m4_po5o4_po5s4_po5š4_po5t4_po5v4_po5z4_re5g4_re5k4_re5p4_re5š4_re5t4_sú5h4_sú5s4_sú5v4_sú5z4_troj5_vo5t4_vo5v4_vy5b4_vy5c4_vý5c4_vy5č4_vý5č4_vy5d4_vý5d4_vy5h4_vý5h4_vy5k4_vý5k4_vy5m4_vy5p4_vý5p4_vy5s4_vý5s4_vy5š4_vy5t4_vý5t4_vy5v4_vy5z4_vý5z4_za5b4_zá5b4_za5c4_za5č4_za5d4_za5h4_za5k4_za5m4_za5p4_za5r4_za5s4_za5š4_za5t4_za5v4_za5z4_za5ž4_zá5k4_zá5z4_zo5b4_zo5h4_zo5s4_zo5š4_zo5t4_zo5v4_zo5z4_zo5ž45b4lah5b4lok5b4lúd5b4rať5b4ruč5b4rús5c4muk5c4nie5c4vak5c4vič5c4vik5č4len5č4lov5d4ňov5d4rať5d4vih5d4viž5d4voj5d4vor5f4ľak5f4ráz5g4raf5g4ram5g4réč5g4rob5h4lad5h4las5h4lav5h4ľad5h4mat5h4mot5h4nať5h4ned5h4nev5h4noj5h4nut5h4núť5h4nút5h4rab5h4ran5h4rať5h4rob5h4rom5h4roz5h4rub5h4ryz5k4lad5k4laď5k4ľak5k4lam5k4lep5k4les5k4ľúč5k4ruh5k4rúž5k4ryt5k4vet5m4nož5m4rav5m4ráz5p4lán5p4lat5p4lav5p4rávs6práv5s4fér5s4koč5s4kok5s4kop5s4kor5s4kôr5s4lav5s4láv5s4led5s4lep5s4luh5s4lúž5s4ľub5s4maž5s4mel5s4mer5s4pev5s4por5s4tav5s4tup5s4ved5š4ľah5š4pin5š4tát5š4tep5š4tít5t4lač5t4lak5t4ras5t4rub5uhoľn5v4lád5v4las5v4rás5v4rav5v4rat5v4rát5v4ták5v4tip5z4lom5z4luč5z4nak5z4nám5z4rak5z4väz5z4vod5z4vuk5z4vuč5ž4ráč5ž4reb5ž4rút_uc6h6_úsc6h_ús7ti_ust6l_ust6rr4p4t_r4š4č_r4t4z_",
		7 : "b2l3c2hd3c4h4nj2c2h3nm2r3c4ha4t2r3nnoz5d4rb3s2t2rd4ľ4ž3kd4l4ž3nd4ľ4ž3nh2r4d3lj3s4t4rj3s4t4vm3p4r3pm3p4r3vn4g3s4tn3š4t4rn3t4l3mp2ŕ4c3nr2s3k4dr2s3k4ts3t4r3bs4t4r3vš4t4r3nt2r4č3kk4č3ný_k4č3né_k4č3ná_k4č3nú_k4č3ní_k4t3ný_k4t3né_k4t3ná_k4t3nú_k4t3ní_n4č3ný_n4č3né_n4č3ná_n4č3nú_n4č3ní_n4k4č3nn4t3ný_n4t3né_n4t3ná_n4t3nú_n4t3ní_r4d3ný_r4d3né_r4d3ná_r4d3nú_r4d3ní_r4m3ný_r4m3né_r4m3ná_r4m3nú_r4m3ní_r4p4č3nr4t3ný_r4t3né_r4t3ná_r4t3nú_r4t3ní_s4t3ný_s4t3né_s4t3ná_s4t3nú_s4t3ní_z4d3ny_z4d3ne_z4d3na_z4d3nu_z4d3ni_z4d3ný_z4d3né_z4d3ná_z4d3nú_z4d3ní_b2l4š3kn2k2t3kl4p3s4kl4t3s4kn4d3s4kn4t3s4kp4t3s4kr4t3s4kr4z5s4kb3s4t4vč3s4t4vd3s4t4vď3s4t4vľ3s4t4vm3s4t4vn3s4t4vp3s4t4vr3s4t4vš3s4t4vt3s4t4vv3s4t4vž3s4t4v_a2e2ro_ap4rio_ap4rió_bez5b4_bez5d4_bez5h4_bez5k4_bez5m4_bez5p4_bez5s4_bez5t4_bez5v4_bez5z4_bielo5_blaho5_bledo5_čo5ch4_da3k2d_desať5_dez5i2_dez5o2_do5č2m_do5š4p_do5t4l_do5t4m_do5t4r_do5t4v_dvoj5u_fol2k5_hydro5_juho5a_koso5u_lesos4_malo5o_mimo5ú_nad5h4_nad5p4_na5st4_ná5st4_na5šk4_na5v4l_na5z4r_na5z4v_náz5v4_ne6t5t_ne5z4l_ne5z4m_ne5z4n_ne5z4r_ne5z4v_nie5k4_obi5d4_obo5s4_obo5z4_od6i5ó_odo5b4_odo5h4_odo5k4_odo5p4_odo5s4_o5h4na_o5h4nú_o5c4h4_o5k4ra_o5k4rá_o5k4ri_o5k4rí_o5k4ru_o5k4rú_o5s4lo_o5s4p4_o5š4k4_o5š4ľ4_o5š4m4_o5š4p4_o5š4v4_o5v4p4_o5z4l4_o5z4re_plno5a_pod5h4_pod5k4_pod5p4_pod5re_pod5v4_pod3ža_pod3žu_pol5d4_polo5a_polo5i_po6š5v_po5t4ľ_po5t4r_pra5o4_pra5p4_pre5b4_pre5c4_pred5i_pre5č4_pre5e2_pre5f2_pre5h4_pre5i4_pre5k4_pre5m4_pre5o4_pre5p4_pre5s4_pre5š4_pre5t4_pre5v4_pre5z4_pre5ž4_pri5b4_pri5č4_pri5d4_pri5h4_pri5k4_prí5k4_pri5m4_pri5p4_pri5s4_prí5s4_pri5š4_pri5t4_pri5v4_pri5z4_pri5ž4_re6k5v_re6p5n_štáto5_sú5k4r_sú5m4r_vo5p4r_vo5s4p_vy6h5ň_vy6š5š_vý6š5k_zo6d5p_zo5d4r_zo5d4v_zo5m4l_zo5m4rauto4rkauto4rs5b4ledn5b4lesk5b4lysk5b4lysn5boh3z45b4rázd5b4ronz5b4rýzg5č4lánk5f4lias5h4liad5h4luch5c6hran5k4lásť5k4liat5k4liať5k4resb5k4resť5k4rídl5k4rôch5k4vadr5p4leta5p4letú5p4riam5s4ladk5s4lovn5s4love5s4lova5s4lovk5s4piev5s4tati5šes4ť55s4t4la5š4liap5š4kola5š4tart5š4tude5š4tudo5š4tyli5š4ťast5štiep45t4resk5t4ried5v4čera5v4šimn5v4z4du5z4mysl5z4náša5z4vest5zv4esť5ž4rane_usc6h6_ús7ta__ús7toč_úst7ny_ús6t6r4b4s4ť_4c4ht4_4j4s4ť_4m4p4r_4m4p4s_4m4š4t_4n4k4t_4p4r4v_5k4rát_akci3a2",
		8 : "_a2u1to32c2h1c2h2c2h1d2z2c2h1d2ž3h2r3d2z3c2h2l3p3c2h2r3b3c2h2r3č3c2h2r3l3c2h2r3t3s4c4h4n3v2r3c2h3b2l4č3n3b2ľ4č3k3b2l4n3k3b2ľ3k2n3b2r4b3l3b2r4b3t3b2r4č3k3b2r4d3c3b2ŕ4d3n3b2r3h2l3b4ŕ4k3n3b4r4m3b3b4r4n3č3b4r4n3k3b4r4š3l3b4r4t3l3b4r4t3n3b4r4v3n3b4r4z3d3b4r4z3l3b4r4z3n3c4ŕ4č3k3c4r4k3n3c4v4r3č3c4v4r3k3c4v4ŕ3k3c4v4r3l3č4l4n3k3č4r3č4r3č4r4p3k3č4r4p3n3č4r4t3n3č4v4r3k3č4v4r3l3d4l4b3n3d4r4c3n3d4r4g3ľ3d4r4g3n3d4r4h3n3d4r4n3č3d4r4n3k3d4r4s3n3d4r4ž3b3d4r4ž3k3f4r4c3k3f4r4c3n3f4r4č3k3f4r4f3l3f4r4k3n3f4r4n3d3f4r4n3g3f4r4n3k3g4l4g3n3g2r4c3k3h2ľ4b3k3h2l3t4n3h2r4b3č3h2r4č3k3h2r4g3ľ3h2r4k3ľ3h2r4k3n3h2ŕ4k3n3h2r4n3č3h2r4s3t3h2r4s3ť3k4l4b3č3k4l4b3k3k4l4z3k3k4l4z3n3k4r4č3m3k4r4č3n3k4r4k3v3k4r4m3n3k4ŕ4m3n3k4r4p3č3k4r4s3t3k4r4š3t3k4r4t3k3k4r4v3n3m2l4č3k3m2ľ4k3n3m2ľ4k3v3m2l4s3n3m4r4k3n3m4r4k3v3m4r4m3l3m4r4n3č3m4r4n3k3m4ŕ4š3t3m4ŕ4t3v3m4r4z3l3m4r4z3k3m4r4z3n3p2l4z3l3p2ľ4z3n3p2r4č3k3p4r4d3n3p4r4s3k3p4r4t3k3s4l4n3k3s4k4r3z3s4m4r3c3s4m4r3č3s4m4r3d3s4m4r3k3s4m4r3t3s4r4d3c3s4r4k3n3s4r4s3t3s4t4ľ3k3s4t4r3č3s4t4ŕ3h3s4t4r3k3š4k4l3b3š4k4r3k3š4k4ŕ3k3š4k4r3t3š4p4l3h3š4t4r3b3t2ľ4c3ť3t2r4b3l3t2r4d3l3t2r4h3l3t2r4h3n3t2r4k3n3t2r4k3v3t2r4m3n3t4ŕ4p3n3t2r4ž3k3t2r4ž3n3t2v4r3d3v2l4h3č3v2l4h3k3v2l4h3n3v2l4n3k3v2l4n3n3v4r4h3n3v4r4k3n3v4ŕ4z3g3v4r4z3g3v4r4z3n3v4r4ž3l3z4h4ŕ3ň3z4r4n3n3ž4l4č3n3ž4l4t3n3ž4r4d3kk4č3nom_k4č3ným_k4č3nej_k4č3nou_k4t3nom_k4t3ným_k4t3nej_k4t3nou_n4č3nom_n4č3ným_n4č3nej_n4č3nou_n4t3nom_n4t3ným_n4t3nej_n4t3nou_r4d3nom_r4d3ným_r4d3nej_r4d3nou_r4m3nom_r4m3ným_r4m3nej_r4m3nou_r4t3nom_r4t3ným_r4t3nej_r4t3nou_s4t3nom_s4t3ným_s4t3nej_s4t3nou_z4d3nom_z4d3nym_z4d3nej_z4d3nou_z4d3ným_l2t3k2a_l2t3k2y_l2t3k2e_l2t3k2u_n2t3k2a_n2t3k2y_n2t3k2e_n2t3k2u_p2t3k2a_p2t3k2y_p2t3k2e_p2t3k2u_s2t3k2a_s2t3k2y_s2t3k2e_s2t3k2u_5p4r4s3t4m4p3s4kr4z3š2t2_arci5k4_belo5h4_bielob4_bieloh4_bielov4_blahop4_blahos4_boha5p4_boho5s4_bože5d4_celo5d4_celo5k4_celo5p4_celo5s4_celo5u4_ceno5t4_cyto5p4_čaro5k4_čaro5s4_čaro5v4_čaro5z4_čudo5t4_de5š4t2_divo5t4_dlho5h4_dlho5p4_do5c4h4_do5š4tí_drevo5o_dvoj5al_dvoj5č4_dvoj5d4_dvoj5h4_dvoj5i4_dvoj5k4_dvoj5p4_dvoj5s4_dvoj5t4_dvoj5v4_dvoj5z4_gala5p4_gama5g4_hnedo5o_hnedo5u_holo5b4_holo5h4_holo5k4_hore5z4_jasno5o_juho5s4_kata5k4_koso5d4_koso5š4_krvi5p4_krvi5s4_krvi5t4_málo5k4_málo5v4_melo5d4_meru5ô2_mikro5o_mimo5š4_mimo5v4_mnoho5u_mnoho5v_mnoho5z_modro5o_mravo5u_na6š5sk_na5v4na_na5v4r4_ná5v4r4_na5v4z4_novo5u2_novo5z2_od5c4h4_okolo5i_o6p5lan_o6p5rat_o5s4lab_o5s4lad_o5s4lav_o5s4láv_o5s4lep_o5s4tar_o5s4tať_o5s4tan_o5s4taň_o5s4táv_o5s6to5_ostro5u_o5s4ved_o5s4vit_o5s4voj_o5t4ras_o5t4rav_o5t4ráv_o5t4rep_o5t4ria_o5v4dov_o5v4lád_o5v4laž_o5z4v4l_plno5p4_plno5š4_poda5k4_pod5b4r_pod5c4h_po5d4rh_po5d4rm_po5d4rv_pod3zem_pod3zol_po5c4h4_pol5i4z_polo5b4_polo5d4_polo5k4_polo5m4_polo5o4_polo5p4_polo5s4_polo5t4_polo5u4_polo5ú4_polo5v4_polo5z4_pol5s4t_po5ob4h_po5ob4l_po6š5ta_po6s5ti_po4v5ra_povy5h4_povy5k4_povy5p4_povy5s4_povy5v4_povy5z4_pra5v4l_pred5c4_pred5h4_pred5k4_pred5m4_pred5op_pred5p4_pred5s4_pred5v4_pred5z4_pre6s5n_prí6s5p_pri6s5p_ro4z5i4_ro6z5í4_rozo5b4_rozo5d4_rozo5m4_rozo5p4_rozo5r4_rozo5s4_rozo5š4_rozo5z4_rozo5ž4_ro6z5u4_ro6z5v43s4polu5_šikmo5o_široko5_št4vor5_su4b5s4_viac5k4_viac5v4_vide2o5_vo5p4ch_vy6h5ne_vy5c4h4_za5c4h45alkohol5b4rec2hčí6s5lov5č4lánok5d4ramat5e2u2róp5f4rancú5h4niezd5h4r3mot5h4viezd5c6h4lap5c6h4leb5c6h4rán5c6h4ráň5c6h4vál5c6h4vát5c6h4vat5k4ritic5k4valif5k4valit5p4letie5p4liesť5p4rirod5p2risám5p4roduk5s4k4lad5s4k4lon5s4k4rot5s4k4rúc5s4k4rýv5s4kúsen5s4kutoč5s4k4vúc5s4tatic5s4t4ran5s4t4rán5s4t4raš5s4t2rat5s4t2red5s4t2rek5s4t4rel5s4t4reľ5s4t4rih5s4t4riž5s4t4rom5s4t4rúh5s4t4run5s4t4ruž5š4k4rab5š4k4rie5š4print5t4retin5t4r4vaj5t4r4val5t4r4van5uholník5viac5h45v4z4ťah5v4z4ťaž5z4mysel_ús7tretkli3e2nt",
		9 : "_as4t4ro3c2h2r3c4h3ch4ľ4p3kčer4s3t4vmaš3k4r3tb3d4ľ4ž3nh2ŕ4s3t4ks3t4r4n3kk4č3ného_k4č3nému_k4č3ných_k4č3nými_k4t3ného_k4t3nému_k4t3ných_k4t3nými_n4č3ného_n4č3nému_n4č3ných_n4č3nými_n4t3ného_n4t3nému_n4t3ných_n4t3nými_r4d3ného_r4d3nému_r4d3ných_r4d3nými_r4m3ného_r4m3nému_r4m3ných_r4m3nými_r4t3ného_r4t3nému_r4t3ných_r4t3nými_s4t3ného_s4t3nému_s4t3ných_s4t3nými_z4d3neho_z4d3nemu_z4d3nych_z4d3nymi_z4d3ného_z4d3nému_z4d3ných_z4d3nými_l2t3k2ou_l2t3k2ám_n2t3k2ou_n2t3k2ám_p2t3k2ou_p2t3k2ám_s2t3k2ou_s2t3k2ám_n4k4t3s4kn4t3s4t4vr4v5s4t4v_aero3g2r_aero3p2l_aero3s2k_aero3s2t_aero3t2r_anti5k4l_anti5k4r_apo5p4le_as3k2lep_balne2o3_božec2h4_cudzo5k4_cudzo5o4_cudzo5s4_cudzo5t4_cudzo5v4_černo5b4_černo5h4_černo5k4_černo5o4_dis2k3d4_dobro5d4_dobro5p4_dobro5s4_do5š4tie_drevo5p4_drevo5v4_druho5s4_elektro5_horno5u4_hrôzo5v4_hrôzy5p4_hrubo5s4_jasno5z4_jedno5h4_jedno5i4_jedno5p4_jedno5s4_jedno5u4_jedno5z4_južno5s4_kmeňo5t4_krivo5p4_kruto5v4_lásky5p4_ľudovo5u_makro5k4_makro5o4_makro5s4_márno5t4_medzi5h4_medzi5i4_medzi5p4_medzi5š4_medzi5t4_mikro5e4_mikro5k4_mikro5p4_mnoho5s4_mnoho5t4_mrako5d4_mucho5t4_na5d4p4__na5d4ŕ4__na6z5vyš_ne5na5h4_ne5na5i4_ne5na5k4_ne5na5m4_ne5na5p4_ne5na5s4_ne5na5t4_ne6s5tor_ne5z4d4r_ne5z4d4v_ni6k5toš_nízko5k4_odo5m4k4_okolo5s4_o6s5tatn_o5s4tatk_o5s4vetl_o5s4viet_o5s4viež_päť5izbo_plno5kr4_po5d4ráž_po5d4rep_po5d4rie_po5d4r4ž_po6h5reb_polo5h4l_po6m5ník_po6s5tul_po6š5tov_po5t4k4n_poroz5p4_poroz5s4_poroz5v4_po5v4z4b_pra5v4nu_pra5v4nú_pred5ch4_predo5h4_pre5d4ri_pre5d4rž_pre5c4h4_pri5c4h4_pri5s4pô5f4rekvenpro6g5ram5g4vardej5c6h4vostna5d4ž4gana5d4ž4gánav3š4tevnáv3š4tevnav3š4tív5p4lastik5s4c2hopn5s4k4rutk5s4potreb5s4p4rávn5s4p4ravo5s4tarost5s4t4rach5s4t4ráda5s4t4riel5s4t4rieľ5päť5s4to5š4t4vera5t4ran4s5_ús7tami__us7t4ric5t4ľ4c4ť_t2ri3u2mf",
		10 : "3č4r4c4h3n3f4r4n3d4ž3c2h2r4b3t3c4h4r4s3t3p4ŕ4c2h3n3s4p4r3c4hko4s3t4r3č4s4ť5k4rát3š4t4v4r3t3š4t4v4r3ť3t2v4r3d4z3t2v4ŕ3d4z3b4r4n3k4n3c4v4r4č3k3c4v4r4n3k3č4ŕ4s3t4v3č4r4t4t3n3č4v4r4k3n3d4r4ž3g4r3f4r4n4g3n3k4r4s4t3n3k4r4s4t3ň3s4m4r4š3ť3s4m4r4t3k3š4k4l4b3n3š4k4r4t3n3š4k4v4r3č3š4k4v4r3k3š4k4v4ŕ3k3š4k4v4r3n3š4m4r4d3k3š4m4r4n3c3š4p4l4h3n3š4t4r4k3n3š3t4r4n3g3t4v4r4d3n3v4r4s3t4v3v4r4z3g4nl2t3k2ách_n2t3k2ách_p2t3k2ách_s2t3k2ách_5s4r4b3s4k_ane3s2téz_aristo5k4_austro5s4_brato5v4r_cáro5v4ra_ces2t5maj_cirkevno5_čierno5b4_čierno5h4_čierno5o4_drobno5z4_kata5s4t4_ktovie5a2_miesto5d4_miesto5p4_na5d4nes__národno5o_ne5do3u2k_o5k4resať_o5s4tatok_o5s6t4rap_plocho5d4_pod5s4koč_pol5o4blú_po6st5g4r_prá5vo5p4_pra5vo5s4_pre5d4rah_pre5d4rap_pre5d4rať_pre5d4raž_pre6k5vap_pri6š5la__pri6š5li__pri6š5lo__rozo5c4h43s4polu5h43s4polu5p43s4polu5v4_široko5p4_t4v4r4do5_vnútro5s4_vnútro5š45boles4t5n5p4ne2umat5s4k4romne5s4p4ravod5s4p4raved5d2ve5s4to5t2ri5s4to5osem5s4to5š4p4liech5š4t4vorecakvári3u2mgymnázi3umle2u3kémia",
		11 : "maš3k4r4t3nl2t3k2a1mi_n2t3k2a1mi_p2t3k2a1mi_s2t3k2a1mi__a2e2ro3d2r_a2e2ro3k2l_ane3s2teti_bac2k3hand_červeno5a4_červeno5b4_červeno5h4_červeno5k4_červeno5o4_červeno5p4_hrôzo5s4t4_chorobo5p45d4vanás4ť55jedenás4ť55šes4ť5s4to5sedem5s4to5deväť5s4to5š4t4ruktúr",
		12 : "3c2h2r4c4h3l3c2h2r4c4h3ľ3c4h4r4s4t3n3c4v4r4n3g4n3š4k4v4r4k3n3š4k4v4ŕ4k3n_akcie3s2c2h_cirkevno5p4_ďatelino5t4_na5d4robno__o5k4resávať_pravicovo5o_pred5ostatn5jedenás4t5k5m4ladis4t3v5š4tyri5s4to5vy5s4t4rája5s4to5k4rát_",
		13 : "5boh3vi4e3a2k5š4t4v4r4ť5k45š4t4v4r4ť5l45š4t4v4r4ť5r45š4t4v4r4ť5s4",
		15 : "ôs4t3k2ár3s4t4v_po6s4t5s4k4rip5boh3vi4e3o2d3k"
	}
};
var h = new window['Hypher'](module.exports);

if (typeof module.exports.id === 'string') {
    module.exports.id = [module.exports.id];
}

module.exports.id.forEach(function (id) {
    window['Hypher']['languages'][id] = h;
});

}());
