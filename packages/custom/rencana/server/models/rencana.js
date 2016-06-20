'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Rencana Schema
 */
var RencanaSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  tahun: {
    type: String,
    required: true
  },
  program: {
    type: String,
    required: true
  },
  sub_program: String,
  nama_kegiatan: {
    type: String,
    required: true
  },
  lokasi: {
    kecamatan: {
      type: String
    },
    desa:{
      type: String
    },
    geo:{
      type: [Number],  // [<longitude>, <latitude>]
      index: '2d'
    }
  },
  volume: String,
  unit: String,
  rencana_biaya: {
    type: Number,
    required: true
  },
  sumber_dana: String,
  proposal: Boolean,
  no_reg_proposal: String
});

/**
 * Validations
 */
RencanaSchema.path('tahun').validate(function(tahun) {
  return !!tahun;
}, 'tahun cannot be blank');

RencanaSchema.path('program').validate(function(program) {
  return !!program;
}, 'program cannot be blank');

RencanaSchema.path('nama_kegiatan').validate(function(nama_kegiatan) {
  return !!nama_kegiatan;
}, 'nama_kegiatan cannot be blank');

RencanaSchema.path('rencana_biaya').validate(function(rencana_biaya) {
  return !!rencana_biaya;
}, 'rencana_biaya cannot be blank');

/**
 * Statics
 */
RencanaSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Rencana', RencanaSchema);
