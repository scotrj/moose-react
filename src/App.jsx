import React from "react";
import { useState } from "react";
import "./App.css";
import {
    AppBar,
    Box,
    Checkbox,
    CssBaseline,
    Drawer,
    FormControlLabel, ListItemText, Divider, ListSubheader, FormControl,
    ListItemIcon,
    FormGroup,
    Link,
    List,
    ListItem,
    Toolbar,
    Typography,
} from "@mui/material";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const data = {
    data: [
        {
            name: "MoosePage1",
            path: "moose/modules/doc/content/index.md",
            key_vals: { key1: "aval", keya: "val" },
        },
        {
            name: "MoosePage2",
            path: "moose/modules/heat_conduction/doc/content/modules/heat_conduction/index.md",
            link: "https://www.google.com/",
            key_vals: { keyheat: "valheat", key: "val", key1: "eval" },
        },
        {
            name: "MoosePage3",
            path: "moose/modules/level_set/doc/content/modules/level_set/example_vortex.md",
            key_vals: { keyvor: "valvor", key: "val", key1: "cval" },
        },
        {
            name: "MoosePage4",
            path: "moose/modules/geochemistry/doc/content/modules/geochemistry/index.md",
            key_vals: { keyg: "valg", keychem: "valuechem" },
        },
        {
            name: "MoosePage5",
            path: "moose/modules/doc/content/index2.md",
            key_vals: { key1: "dval", keya: "val", thing1: "thing2" },
        },
    ],
};

data.data = [{
    name: "Subchannel Model for the ORNL 19-Pin Benchmark", path: "/data/civet2/build/virtual_test_bed/doc/content/sfr/subchannel/ornl_19_pin/ornl_19_pin.md", key_vals: { reactor_type: "SFR", geometry: "assembly", simulation_type: "thermal_hydraulics", codes_used: "Pronghorn_subchannel", computing_needs: "Workstation", transient: "steady_state", fiscal_year: "2023", sponsor: "NEAMS", institution: "INL" }, link: "../../sfr/subchannel/ornl_19_pin/ornl_19_pin.html"
}, { name: "FHR Core SAM Model", path: "/data/civet2/build/virtual_test_bed/doc/content/pbfhr/pbfhr_sam/pbfhr_sam.md", key_vals: { reactor_type: "PB-FHR", reactor: "Mk1-FHR", simulation_type: "thermal_hydraulics", transient: "steady_state;PLOF", input_features: "checkpoint_restart", codes_used: "SAM", computing_needs: "Workstation", fiscal_year: "2021", sponsor: "NEAMS", institution: "ANL" }, link: "../../pbfhr/pbfhr_sam/pbfhr_sam.html" }, { name: "MSFR Griffin-Pronghorn Steady State Model", path: "/data/civet2/build/virtual_test_bed/doc/content/msr/msfr/griffin_pgh_model.md", key_vals: { reactor_type: "MSR", reactor: "MSFR", geometry: "core", simulation_type: "multiphysics", input_features: "multiapps", transient: "steady_state;ULOF", codes_used: "BlueCrab;Griffin;Pronghorn;MOOSE_NavierStokes", open_source: "partial", computing_needs: "Workstation", fiscal_year: "2021", sponsor: "NRIC", institution: "INL" }, link: "../../msr/msfr/griffin_pgh_model.html" }, { name: "Gas-Cooled Microreactor Assembly", path: "/data/civet2/build/virtual_test_bed/doc/content/microreactors/gcmr/GCMR_Assembly_index.md", key_vals: { reactor_type: "microreactor", reactor: "GCMR", geometry: "assembly", simulation_type: "multiphysics", codes_used: "BlueCrab;Griffin;BISON", input_features: "multiapps", transient: "steady_state;RIA;flow_blockage", computing_needs: "HPC", fiscal_year: "2023", institution: "ANL", sponsor: "NEAMS" }, link: "../../microreactors/gcmr/GCMR_Assembly_index.html" }, { name: "Molten Salt Reactor Experiment SAM Model", path: "/data/civet2/build/virtual_test_bed/doc/content/msr/msre/msre_sam_model.md", key_vals: { reactor_type: "MSR", reactor: "MSRE", geometry: "primary_loop", codes_used: "SAM", transient: "steady_state;RIA", input_features: "checkpoint_restart", computing_needs: "Workstation", fiscal_year: "2022", sponsor: "NEAMS", institution: "ANL" }, link: "../../msr/msre/msre_sam_model.html" }, { name: "Versatile Test Reactor Core model", path: "/data/civet2/build/virtual_test_bed/doc/content/sfr/vtr/vtr_model.md", key_vals: { reactor_type: "SFR", reactor: "VTR", geometry: "core", simulation_type: "multiphysics", transient: "steady_state", codes_used: "BlueCrab;Griffin;BISON;SAM", computing_needs: "Workstation", input_features: "multiapps", fiscal_year: "2022", institution: "INL", sponsor: "VTR" }, link: "../../sfr/vtr/vtr_model.html" }, { name: "MHTGR Griffin Benchmark", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/mhtgr_griffin/mhtgr350_model.md", key_vals: { reactor_type: "HTGR", reactor: "MHTGR", geometry: "core", simulation_type: "neutronics", transient: "steady_state", codes_used: "Griffin", computing_needs: "Workstation", fiscal_year: "2023", institution: "INL", sponsor: "ART" }, link: "../../htgr/mhtgr_griffin/mhtgr350_model.html" }, { name: "Micro-Reactor Multiphysics model", path: "/data/civet2/build/virtual_test_bed/doc/content/microreactors/mrad/mrad_model.md", key_vals: { reactor_type: "microreactor", reactor: "HPMR", geometry: "core", simulation_type: "multiphysics", input_features: "multiapps;reactor_meshing;mixed_restart", transient: "steady_state;overpower;load_follow;ULOC", codes_used: "BlueCrab;Griffin;BISON;Sockeye", computing_needs: "HPC", fiscal_year: "2023", sponsor: "NEAMS", institution: "ANL" }, link: "../../microreactors/mrad/mrad_model.html" }, { name: "SNAP 8 Experimental Reactor Multiphysics model", path: "/data/civet2/build/virtual_test_bed/doc/content/microreactors/s8er/s8er_multiphysics_model.md", key_vals: { reactor_type: "microreactor", reactor: "SNAP-8", geometry: "core", input_features: "multiapps", simulation_type: "multiphysics", transient: "steady_state", codes_used: "Griffin;BISON;Serpent", computing_needs: "Workstation", fiscal_year: "2023", sponsor: "NRIC;NEUP", institution: "INL" }, link: "../../microreactors/s8er/s8er_multiphysics_model.html" }, { name: "Gas-Cooled Microreactor Air Jacket", path: "/data/civet2/build/virtual_test_bed/doc/content/microreactors/airjacket/index.md", key_vals: { reactor_type: "microreactor", reactor: "GCMR", geometry: "air_jacket", simulation_type: "CFD", codes_used: "Nek5000", open_source: "true", computing_needs: "HPC", fiscal_year: "2023", institution: "ANL", sponsor: "NRIC" }, link: "../../microreactors/airjacket/index.html" }, { name: "Micro Reactor Drum Rotation model", path: "/data/civet2/build/virtual_test_bed/doc/content/microreactors/drum_rotation/index.md", key_vals: { reactor_type: "microreactor", reactor: "Empire", geometry: "core", simulation_type: "neutronics;multiphysics", input_features: "reactor_meshing;multiapps;solution_vector_restart", transient: "steady_state;reactivity_insertion", codes_used: "Griffin;MOOSE_HeatTransfer", computing_needs: "Workstation", open_source: "partial", fiscal_year: "2024", sponsor: "NEAMS", institution: "INL" }, link: "../../microreactors/drum_rotation/index.html" }, { name: "Subchannel Model for the Toshiba 37-Pin Benchmark", path: "/data/civet2/build/virtual_test_bed/doc/content/sfr/subchannel/toshiba_37_pin/toshiba_37_pin.md", key_vals: { reactor_type: "SFR", geometry: "assembly", simulation_type: "thermal_hydraulics", transient: "steady_state", codes_used: "Pronghorn_subchannel", computing_needs: "Workstation", fiscal_year: "2023", sponsor: "NEAMS", institution: "INL" }, link: "../../sfr/subchannel/toshiba_37_pin/toshiba_37_pin.html" }, { name: "High Fidelity Neutronics Model for Lead-cooled Fast Reactor", path: "/data/civet2/build/virtual_test_bed/doc/content/lfr/heterogeneous_single_assembly_3D/Griffin_standalone_LFR.md", key_vals: { reactor_type: "LFR", geometry: "assembly", simulation_type: "neutronics", codes_used: "Griffin;MCC3", computing_needs: "HPC", input_features: "reactor_meshing", fiscal_year: "2023", institution: "ANL", sponsor: "NEAMS" }, link: "../../lfr/heterogeneous_single_assembly_3D/Griffin_standalone_LFR.html" }, { name: "GCMR Core Thermal Model", path: "/data/civet2/build/virtual_test_bed/doc/content/microreactors/gcmr/bypass_flow/Core_with_bypass_model.md", key_vals: { reactor_type: "microreactor", reactor: "GCMR", geometry: "core", simulation_type: "thermal_hydraulics", input_features: "multiapps", codes_used: "Pronghorn_subchannel;MOOSE_HeatTransfer;MOOSE_ThermalHydraulics", computing_needs: "Workstation", open_source: "partial", fiscal_year: "2023", sponsor: "NRIC", institution: "INL" }, link: "../../microreactors/gcmr/bypass_flow/Core_with_bypass_model.html" }, { name: "HTTF Core Model", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/httf/httf_multiapp_model.md", key_vals: { reactor_type: "HTGR", reactor: "HTTF", geometry: "core", simulation_type: "thermal_hydraulics", codes_used: "RELAP-7;MOOSE_HeatTransfer", input_features: "multiapps;control_logic", computing_needs: "HPC", open_source: "partial", fiscal_year: "2023", sponsor: "NEAMS", institution: "INL" }, link: "../../htgr/httf/httf_multiapp_model.html" }, { name: "Hexagonal Duct IAEA Benchmarks", path: "/data/civet2/build/virtual_test_bed/doc/content/sfr/hex_duct_bowing/index.md", key_vals: { reactor_type: "SFR", geometry: "assembly_duct", simulation_type: "component_analysis;thermo_mechanics", codes_used: "MOOSE_TensorMechanics", transient: "steady_state", computing_needs: "Workstation", open_source: "true", fiscal_year: "2022", sponsor: "NEAMS", institution: "ANL" }, link: "../../sfr/hex_duct_bowing/index.html" }, { name: "MSFR Nek5000 CFD Modeling", path: "/data/civet2/build/virtual_test_bed/doc/content/msr/msfr/nek5000_cfd_model.md", key_vals: { reactor_type: "MSR", reactor: "MSFR", geometry: "core", simulation_type: "CFD", codes_used: "Nek5000", open_source: "true", computing_needs: "HPC", fiscal_year: "2022", sponsor: "NEAMS", institution: "ANL" }, link: "../../msr/msfr/nek5000_cfd_model.html" }, { name: "Molten Salt Reactor Experiment nekRS Model", path: "/data/civet2/build/virtual_test_bed/doc/content/msr/msre/lp_nekrs_model.md", key_vals: { reactor_type: "MSR", reactor: "MSRE", geometry: "plenum", codes_used: "NekRS", computing_needs: "HPC", fiscal_year: "2023", sponsor: "NEAMS", institution: "ANL" }, link: "../../msr/msre/lp_nekrs_model.html" }, { name: "MSR Depletion Model", path: "/data/civet2/build/virtual_test_bed/doc/content/msr/msr_generic/depletion/model.md", key_vals: { reactor_type: "MSR", reactor: "generic_msr", geometry: "mini-core", simulation_type: "depletion", codes_used: "Griffin", computing_needs: "Workstation", fiscal_year: "2023", sponsor: "ART", institution: "INL" }, link: "../../msr/msr_generic/depletion/model.html" }, { name: "Molten Salt Fast Reactor SAM Model", path: "/data/civet2/build/virtual_test_bed/doc/content/msr/msfr/plant/SAM_model.md", key_vals: { reactor_type: "MSR", reactor: "MSFR", geometry: "primary_loop", simulation_type: "thermal_hydraulics", codes_used: "SAM", transient: "steady_state;ULOF", input_features: "checkpoint_restart", computing_needs: "Workstation", fiscal_year: "2021" }, link: "../../msr/msfr/plant/SAM_model.html" }, { name: "FHR Core Steady-State Model", path: "/data/civet2/build/virtual_test_bed/doc/content/pbfhr/steady/griffin_pgh_model.md", key_vals: { reactor_type: "PB-FHR", reactor: "Mk1-FHR", geometry: "core", simulation_type: "multiphysics", input_features: "multiapps", transient: "steady_state", codes_used: "BlueCrab;Griffin;Pronghorn", computing_needs: "Workstation", fiscal_year: "2020", sponsor: "NRIC", institution: "INL" }, link: "../../pbfhr/steady/griffin_pgh_model.html" }, { name: "MOOSE MultiApps Tutorial for Reactor Applications", path: "/data/civet2/build/virtual_test_bed/doc/content/resources/multiapps.md", key_vals: { tutorials: "multiapps", simulation_type: "multiphysics", codes_used: "Griffin", open_source: "partial", input_features: "multiapps", computing_needs: "Workstation", fiscal_year: "2022" }, link: "../multiapps.html" }, { name: "SAM Generic PBR Model", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/generic-pbr/generic-pbr_model.md", key_vals: { reactor_type: "HTGR", reactor: "generic_PBR", geometry: "core", simulation_type: "multiphysics", transient: "load_follow", input_features: "checkpoint_restart", codes_used: "SAM", computing_needs: "Workstation", fiscal_year: "2021", sponsor: "NEAMS", institution: "ANL" }, link: "../../htgr/generic-pbr/generic-pbr_model.html" }, { name: "HPMR_H2 Direwolf Steady State Model", path: "/data/civet2/build/virtual_test_bed/doc/content/microreactors/hpmr_h2/hpmr_h2_model.md", key_vals: { reactor_type: "microreactor", reactor: "HPMR_H2", geometry: "core", simulation_type: "multiphysics", input_features: "multiapps;reactor_meshing", codes_used: "DireWolf;Griffin;BISON;Sockeye", computing_needs: "HPC", fiscal_year: "2024", institution: "INL", sponsor: "INL-LDRD" }, link: "../../microreactors/hpmr_h2/hpmr_h2_model.html" }, { name: "Heat-Pipe Microreactor Assembly", path: "/data/civet2/build/virtual_test_bed/doc/content/microreactors/hpmr_assembly/index.md", key_vals: { reactor_type: "microreactor", reactor: "HPMR", geometry: "assembly", simulation_type: "multiphysics", input_features: "multiapps;reactor_meshing", transient: "steady_state", codes_used: "DireWolf;BISON;Sockeye", computing_needs: "Workstation", fiscal_year: "2024", sponsor: "NEAMS", institution: "INL" }, link: "../../microreactors/hpmr_assembly/index.html" }, { name: "Sodium Fast Reactor Single Assembly Model", path: "/data/civet2/build/virtual_test_bed/doc/content/sfr/single_assembly/sfr.md", key_vals: { reactor_type: "SFR", geometry: "assembly", simulation_type: "multiphysics", input_features: "multiapps", transient: "steady_state", codes_used: "BlueCrab;Griffin;BISON;SAM", computing_needs: "Workstation", fiscal_year: "2021", institution: "INL", sponsor: "VTR" }, link: "../../sfr/single_assembly/sfr.html" }, { name: "Pebble Bed Modular Reactor Core Multiphysics", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/pbmr/model_description.md", key_vals: { reactor_type: "HTGR", reactor: "PBMR-400", geometry: "core", simulation_type: "multiphysics", input_features: "multiapps;mixed_restart", transient: "steady_state;PLOFC", codes_used: "BlueCrab;Griffin;Pronghorn", computing_needs: "Workstation", fiscal_year: "2021", sponsor: "NEAMS", institution: "INL" }, link: "../../htgr/pbmr/model_description.html" }, { name: "LEU Fuel Pulse", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/leu_pulse/treat_leu_model.md", key_vals: { reactor_type: "HTGR", geometry: "mini-core", simulation_type: "multiphysics", transient: "RIA", codes_used: "Griffin;MOOSE_HeatTransfer", computing_needs: "Workstation", fiscal_year: "2023", sponsor: "NRIC", institution: "INL" }, link: "../../htgr/leu_pulse/treat_leu_model.html" }, { name: "TRISO Bison Model", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/triso/triso_model.md", key_vals: { reactor_type: "HTGR", geometry: "TRISO", simulation_type: "fuel_performance", codes_used: "BISON", transient: "depletion", computing_needs: "Workstation", fiscal_year: "2022", sponsor: "NEAMS", institution: "INL" }, link: "../../htgr/triso/triso_model.html" }, { name: "Effect of Partial Blockages in Simulated LMFBR Fuel Assemblies", path: "/data/civet2/build/virtual_test_bed/doc/content/sfr/subchannel/thors/thors.md", key_vals: { reactor_type: "SFR", geometry: "assembly", simulation_type: "thermal_hydraulics", transient: "steady_state", codes_used: "Pronghorn_subchannel", computing_needs: "Workstation", fiscal_year: "2024", sponsor: "NEAMS", institution: "INL" }, link: "../../sfr/subchannel/thors/thors.html" }, { name: "MSFR Griffin-Pronghorn Transient Model", path: "/data/civet2/build/virtual_test_bed/doc/content/msr/msfr/griffin_pgh_transient_model.md", key_vals: { reactor_type: "MSR", reactor: "MSFR", geometry: "core", simulation_type: "multiphysics", input_features: "multiapps", transient: "ULOF", codes_used: "BlueCrab;Griffin;Pronghorn;MOOSE_NavierStokes", computing_needs: "Workstation", fiscal_year: "2021", sponsor: "NRIC", institution: "INL" }, link: "../../msr/msfr/griffin_pgh_transient_model.html" }, { name: "Conjugate Heat Transfer Simulation of a 67-Pebble Core", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/pb67_cardinal/index.md", key_vals: { reactor_type: "HTGR", geometry: "pebble_bed", simulation_type: "CFD", codes_used: "Cardinal;NekRS;MOOSE_HeatTransfer", input_features: "multiapps", computing_needs: "Workstation", gpu_enabled: "true", open_source: "true", fiscal_year: "2023", institution: "PSU;ANL", sponsor: "NEAMS" }, link: "../../htgr/pb67_cardinal/index.html" }, { name: "Nek5000 CFD Modeling of HTTF Lower Plenum Flow Mixing Phenomenon", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/httf/lower_plenum_cfd.md", key_vals: { reactor_type: "HTGR", reactor: "HTTF", geometry: "plenum", simulation_type: "CFD", transient: "steady_state", codes_used: "Nek5000", computing_needs: "HPC", open_source: "true", fiscal_year: "2023", sponsor: "NEAMS", institution: "ANL" }, link: "../../htgr/httf/lower_plenum_cfd.html" }, { name: "FHR Bypass Flow Reflector Model", path: "/data/civet2/build/virtual_test_bed/doc/content/pbfhr/reflector.md", key_vals: { reactor_type: "PB-FHR", geometry: "reflector", simulation_type: "component_analysis;CFD", codes_used: "Cardinal;NekRS;MOOSE_HeatTransfer", open_source: "true", input_features: "multiapps", computing_needs: "HPC", gpu_enabled: "true", fiscal_year: "2021", sponsor: "NRIC", institution: "ANL" }, link: "../../pbfhr/reflector.html" }, { name: "High Temperature Engineering Test Reactor (HTTR) Null Transient Model", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/httr/httr_null_transient_model_description.md", key_vals: { reactor_type: "HTGR", reactor: "HTTR", geometry: "core", simulation_type: "multiphysics", input_features: "multiapps;mixed_restart", transient: "null", codes_used: "Sabertooth;Griffin;MOOSE_HeatTransfer;RELAP-7", computing_needs: "Workstation", fiscal_year: "2023" }, link: "../../htgr/httr/httr_null_transient_model_description.html" }, { name: "Generic Pebble Bed HTGR Pronghorn tutorial", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/generic-pbr-tutorial/index.md", key_vals: { reactor_type: "HTGR", reactor: "generic_PBR", tutorials: "PBR", geometry: "core", simulation_type: "thermal_hydraulics", transient: "steady_state", codes_used: "Pronghorn", computing_needs: "Workstation", fiscal_year: "2024", sponsor: "ART;NRIC", institution: "INL" }, link: "../../htgr/generic-pbr-tutorial/index.html" }, { name: "MSFR Steady-State Griffin-Pronghorn-SAM Coupling", path: "/data/civet2/build/virtual_test_bed/doc/content/msr/msfr/plant/steady_state_coupling.md", key_vals: { reactor_type: "MSR", reactor: "MSFR", geometry: "primary_loop", simulation_type: "multiphysics", codes_used: "BlueCrab;Griffin;Pronghorn;SAM", input_features: "multiapps", transient: "steady_state", computing_needs: "HPC", fiscal_year: "2023", institution: "INL", sponsor: "NEAMS;NRIC" }, link: "../../msr/msfr/plant/steady_state_coupling.html" }, { name: "FHR Plant Model", path: "/data/civet2/build/virtual_test_bed/doc/content/pbfhr/balance_of_plant/plant.md", key_vals: { reactor_type: "PB-FHR", reactor: "Mk1-FHR", simulation_type: "balance_of_plant", codes_used: "BlueCrab;Griffin;Pronghorn", computing_needs: "Workstation", input_features: "multiapps;mixed_restart", sponsor: "NRIC;NEAMS", institution: "INL", fiscal_year: "2022" }, link: "../../pbfhr/balance_of_plant/plant.html" }, { name: "MHTGR SAM Model", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/mhtgr_sam/sam_mhtgr_model.md", key_vals: { reactor_type: "HTGR", reactor: "MHTGR", geometry: "primary_loop", simulation_type: "balance_of_plant", input_features: "checkpoint_restart", codes_used: "SAM", computing_needs: "Workstation", fiscal_year: "2022", sponsor: "NEAMS", institution: "ANL" }, link: "../../htgr/mhtgr_sam/sam_mhtgr_model.html" }, { name: "High Temperature Engineering Test Reactor Steady State Model", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/httr/httr_steady_state_model_description.md", key_vals: { reactor_type: "HTGR", reactor: "HTTR", geometry: "core", simulation_type: "multiphysics", input_features: "multiapps", transient: "steady_state;null", codes_used: "Sabertooth;Griffin;MOOSE_HeatTransfer;RELAP-7", computing_needs: "Workstation", fiscal_year: "2023" }, link: "../../htgr/httr/httr_steady_state_model_description.html" }, { name: "Advanced Burner Test Reactor Loss of Flow Accident", path: "/data/civet2/build/virtual_test_bed/doc/content/sfr/abtr/abtr.md", key_vals: { reactor_type: "SFR", reactor: "ABTR", simulation_type: "balance_of_plant", codes_used: "SAM", input_features: "checkpoint_restart", transient: "steady_state;ULOF", computing_needs: "Workstation", fiscal_year: "2022", sponsor: "NEAMS;NRC", institution: "ANL" }, link: "../../sfr/abtr/abtr.html" }, { name: "MSRE Griffin-Pronghorn Steady State Model", path: "/data/civet2/build/virtual_test_bed/doc/content/msr/msre/multiphysics_rz_model/msre_multiphysics_core_model.md", key_vals: { reactor_type: "MSR", reactor: "MSRE", geometry: "core", simulation_type: "multiphysics", transient: "steady_state", input_features: "multiapps", codes_used: "BlueCrab;Griffin;Pronghorn", computing_needs: "Workstation", fiscal_year: "2023", institution: "INL", sponsor: "NEAMS;NRIC" }, link: "../../msr/msre/multiphysics_rz_model/msre_multiphysics_core_model.html" }, { name: "HTR-10 Griffin Neutronics Model", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/htr10/griffin_htr10_model.md", key_vals: { reactor_type: "HTGR", reactor: "HTR-10", geometry: "core", simulation_type: "neutronics", transient: "steady_state", codes_used: "Griffin", computing_needs: "Workstation", fiscal_year: "2021", sponsor: "NRC", institution: "INL" }, link: "../../htgr/htr10/griffin_htr10_model.html" }, { name: "2D Ring Model for the High Temperature Test Facility", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/httf/httf_sam_model.md", key_vals: { reactor_type: "HTGR", reactor: "HTTF", geometry: "core", codes_used: "SAM", computing_needs: "Workstation", transient: "steady_state", fiscal_year: "2024", sponsor: "NEAMS", institution: "ANL" }, link: "../../htgr/httf/httf_sam_model.html" }, { name: "Multiphysics Coupling of OpenMC, MOOSE, and THM for a prismatic HTGR", path: "/data/civet2/build/virtual_test_bed/doc/content/htgr/assembly/index.md", key_vals: { reactor_type: "HTGR", reactor: "generic_prismatic_htgr", geometry: "assembly", simulation_type: "multiphysics", codes_used: "Cardinal;OpenMC;MOOSE_HeatTransfer;MOOSE_ThermalHydraulics", open_source: "true", transient: "steady_state", input_features: "multiapps;reactor_meshing", computing_needs: "HPC", fiscal_year: "2022", sponsor: "NEAMS", institution: "ANL" }, link: "../../htgr/assembly/index.html" }, { name: "Lotus Griffin-Pronghorn Steady State Model", path: "/data/civet2/build/virtual_test_bed/doc/content/msr/lotus/lotus_multiphysics_model.md", key_vals: { reactor_type: "MSR", reactor: "generic_msr", geometry: "core", simulation_type: "multiphysics", input_features: "multiapps", transient: "steady_state", codes_used: "BlueCrab;Griffin;Pronghorn;MOOSE_NavierStokes", open_source: "partial", computing_needs: "HPC", fiscal_year: "2024", institution: "INL", sponsor: "NEAMS" }, link: "../../msr/lotus/lotus_multiphysics_model.html" }, { name: "Gas-Cooled Microreactor Balance of Plant", path: "/data/civet2/build/virtual_test_bed/doc/content/microreactors/gcmr/BOP_model_description.md", key_vals: { reactor_type: "microreactor", reactor: "GCMR", geometry: "plant", simulation_type: "multiphysics", codes_used: "BlueCrab;Griffin;MOOSE_ThermalHydraulics", input_features: "control_logic", transient: "startup;load_follow", open_source: "partial", computing_needs: "Workstation", fiscal_year: "2023", institution: "INL", sponsor: "NRIC" }, link: "../../microreactors/gcmr/BOP_model_description.html" }];

const drawerWidth = 240;

function App() {
    const [checked_keys, setCheckedKeys] = useState(new Set());

    // Build the datastructure for the menu
    const menu_data_arrays = {};
    for (const row of data.data) {
        for (const key in row.key_vals) {
            if (!menu_data_arrays[key]) menu_data_arrays[key] = new Array();

            menu_data_arrays[key].push(row.key_vals[key]);
        }
    }

    // Sort each category alphabetically
    for (const key in menu_data_arrays)
        menu_data_arrays[key].sort()

    // Convert arrays to sets
    const menu_data = {};
    for (const key in menu_data_arrays) {
        menu_data[key] = new Set();
        for (const item of menu_data_arrays[key])
            menu_data[key].add(item);
    }

    const handleCheck = (event) => {
        if (event.target.checked) {
            checked_keys.add(event.target.value);
            setCheckedKeys(new Set(checked_keys));
        } else {
            checked_keys.delete(event.target.value);
            setCheckedKeys(new Set(checked_keys));
        }
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Select Tags
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >

                {Object.keys(menu_data).map((key) => {
                    return <SectionBlock key={key} sectionTitle={key} items={menu_data[key]} handleCheck={handleCheck} />;                    
                })}

            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: "white", p: 3 }}>
                <List>
                    {data.data
                        .filter((row) => {
                            let found_keys = {};

                            // Avoid displaying all results when opening the page
                            if (checked_keys.size == 0)
                                return false;

                            // Keep track of which data entries (row) matched the key/value of the user-selected checked_keyes
                            for (const checked_key of checked_keys) {
                                const [checked_key_name, checked_key_value] =
                                    checked_key.split(":");

                                if (row.key_vals[checked_key_name] == checked_key_value)
                                    found_keys[checked_key_name] = true;
                            }

                            // If any of the of the keys were not in the data entry with the right value
                            // then exclude the data entry. For that key, it did not have the right value.
                            for (const checked_key of checked_keys) {
                                const [checked_key_name, checked_key_value] =
                                    checked_key.split(":");

                                if (!found_keys[checked_key_name]) return false;
                            }

                            return true;
                        })
                        .map((row) => (
                            <ListItem>
                                <Link href={row.link}>{row.name}</Link>
                            </ListItem>
                        ))}
                </List>
            </Box>
        </Box>
    );
}

const SectionBlock = ({ sectionTitle, items, handleCheck }) => {
    
    let title = sectionTitle.replaceAll('_', ' ');
    
    return <><List sx={{ textAlign: 'left' }} dense={true}
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" style = {{ textTransform:'capitalize', fontWeight: 'bold', height: '30px' }}>
                        {title}
                    </ListSubheader>
            }>

        {Array.from(items).map((val) => (
            <MenuItem key={`${sectionTitle}_${val}`} title={val} handleCheck={handleCheck} />
        ))}

    </List><Divider /></>;
};

const MenuItem = ({ title, handleCheck }) => {

    // Some titles come in with _, replace those with spaces
    title = title.replaceAll('_', ' ');

    return <ListItem disablePadding disableGutters dense={true} sx={{ pl: '16px', height: '35px', color: 'rgb(54,65,82)' }}  >
        <ListItemText dense disableTypography style={{ textTransform: 'capitalize' }}>
            <FormControl margin='none' size='small' fullWidth>
                <FormControlLabel control={<Checkbox size='small' onChange={handleCheck} />} label={title} componentsProps={{ typography: { variant:'caption' } }} />
            </FormControl>
        </ListItemText>
    </ListItem>;
}

export default App;
