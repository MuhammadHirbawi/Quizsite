const questions = [
  {
    question: "What are the essential parts of a communication system?",
    options: [
      "sender or transmitter",
      "transmission line or channel",
      "receiver",
      "All of the above",
    ],
    answer: [3],
  },
  {
    question: "Is this communication system unidirectional or bidirectional?",
    options: [
      "unidirectional",
      "bidirectional",
    ],
    answer: [0],
  },
  {
    question: "What type of waves are electrical signals?",
    options: [
      "electromagnetic waves",
      "sound waves",
    ],
    answer: [0],
  },
  {
    question: "How are the many simultaneous radio communications that radiate through space prevented from interfering with one another?",
    options: [
      "The radio communications are multiplexed or combined.",
      "Each radio communications uses a different carrier frequency.",
      "Each radio transmitter uses a different modulation method.",
    ],
    answer: [1],
  },
  {
    question: "What is the frequency range of carrier signals?",
    options: [
      "10 kHz to 1000 GHz",
      "30 kHz to 100 kHz",
      "100 kHz to 300 kHz",
    ],
    answer: [0],
  },
  {
    question: "What characteristic of the carrier signal is varied by modulation?",
    options: [
      "amplitude",
      "frequency",
      "phase",
      "Any of the above",
    ],
    answer: [3],
  },
  {
    question: "What frequency contains the message signal?",
    options: [
      "the carrier signal frequency",
      "the sideband frequencies",
    ],
    answer: [1],
  },
  {
    question: "Radio signals are transmitted by what method?",
    options: [
      "radiated through space",
      "conducted through a wire",
      "All of the above",
    ],
    answer: [2],
  },
  {
    question: "What is the process of recovering the message signal from the carrier signal?",
    options: [
      "modulation",
      "filtering",
      "demodulation",
    ],
    answer: [2],
  },
  {
    question: "What is the channel 1 signal at M on the MODULATOR?",
    options: [
      "carrier signal",
      "message signal",
    ],
    answer: [1],
  },
  {
    question: "When you increased the frequency to 5 kHz, did the signal period (the time between one cycle) decrease?",
    options: [
      "yes",
      "no",
    ],
    answer: [0],
  },
  {
    question: "When you increased the amplitude of the message signal to 400 mVpk-pk, did the period increase, decrease, or stay constant?",
    options: [
      "increase",
      "decrease",
      "stay constant",
    ],
    answer: [2],
  },
  {
    question: "What is the signal on channel 2?",
    options: [
      "carrier signal",
      "message signal",
    ],
    answer: [0],
  },
  {
    question: "What type of modulation are you observing on channel 2?",
    options: [
      "amplitude modulation",
      "frequency modulation",
      "phase modulation",
    ],
    answer: [0],
  },
  {
    question: "What is the signal on channel 2?",
    options: [
      "the carrier signal",
      "the recovered message signal",
    ],
    answer: [1],
  },
  {
    question: "Carrier signals may have a frequency from 10 kHz to 1000 GHz. In the PROCEDURE section, you used a 1000 kHz carrier signal. What is the frequency range of message signals?",
    options: [
      "1 Hz to 10 Hz",
      "30 Hz to 50 kHz",
      "20 Hz to 20 kHz",
      "100 kHz to 200 kHz",
    ],
    answer: [2],
  },
  {
    question: "What is the process of combining a message signal with a carrier signal for communication over long distances?",
    options: [
      "amplification",
      "filtering",
      "demodulation",
      "modulation",
    ],
    answer: [3],
  },
  {
    question: "What type of modulation is shown?",
    options: [
      "frequency modulation",
      "amplitude modulation",
      "phase modulation",
      "angle modulation",
    ],
    answer: [1],
  },
  {
    question: "In the PROCEDURE section, you modulated a 1000 kHz carrier signal with a 2 kHz message signal. The frequency spectrum of the AM signal that is produced is shown. What is the bandwidth of the AM signal?",
    options: [
      "2 kHz",
      "4 kHz",
      "1002 kHz",
      "998 kHz",
    ],
    answer: [1],
  },
  {
    question: "In the PROCEDURE section, what function did the ENVELOPE DETECTOR perform?",
    options: [
      "mixing",
      "amplification",
      "demodulation",
      "modulation",
    ],
    answer: [2],
  },
  {
    question: "What is the function of the oscillators on the circuit board?",
    options: [
      "They provide the high frequencies that are necessary for transmitting and receiving the low frequency message signal.",
      "They provide the low frequency message signal.",
    ],
    answer: [0],
  },
  {
    question: "What is the function of a modulator?",
    options: [
      "It recovers the low frequency message signal from the high frequency carrier signal.",
      "It combines the message signal with the carrier signal so that the message can be transmitted at the higher carrier frequency",
    ],
    answer: [1],
  },
  {
    question: "What is one of the components that is adjusted when you tune into your favorite radio station?",
    options: [
      "a filter that passes the transmission frequency assigned to your favorite station",
      "a detector that demodulates the carrier signal",
    ],
    answer: [0],
  },
  {
    question: "What is the impedance of an LC network at its resonant frequency (fr)?",
    options: [
      "The impedance is capacitive and the signal’s phase is shifted.",
      "The impedance is resistive and the network's output signal is maximum.",
    ],
    answer: [1],
  },
  {
    question: "What is the function of a detector?",
    options: [
      "It recovers the message signal.",
      "It detects the transmitted radio frequency",
    ],
    answer: [0],
  },
  {
    question: "On the VCO-LO circuit block, set the potentiometer knob completely counterclockwise (CCW). What is the function of the VCO-LO potentiometer knob?",
    options: [
      "It adjusts the VCO-LO frequency.",
      "It adjusts the VCO-LO amplitude.",
    ],
    answer: [1],
  },
  {
    question: "What is the function of the NEGATIVE SUPPLY knob?",
    options: [
      "It adjusts the VCO-LO frequency.",
      "It adjusts the VCO-LO phase.",
    ],
    answer: [0],
  },
  {
    question: "With channel 1 set to 100 mV/DIV, how many vertical oscilloscope graticule divisions will equal a 300 mVpk-pk signal?",
    options: [
      "1",
      "2",
      "3",
    ],
    answer: [2],
  },
  {
    question: "Did the VCO-LO frequency increase or decrease?",
    options: [
      "increase",
      "decrease",
    ],
    answer: [0],
  },
  {
    question: "With a sweep setting of 0.5 ms/DIV, how many horizontal oscilloscope graticule divisions equal one cycle of a 1000 kHz signal?",
    options: [
      "1",
      "2",
      "3",
    ],
    answer: [1],
  },
  {
    question: "What is the function of the POSITIVE SUPPLY knob?",
    options: [
      "It adjusts the VCO-HI frequency.",
      "It adjusts the VCO-HI phase",
    ],
    answer: [0],
  },
  {
    question: "Did the VCO-HI frequency increase or decrease?",
    options: [
      "increase",
      "decrease",
    ],
    answer: [1],
  },
  {
    question: "How many two-post connectors did you use to connect the SSB transmitter circuit?",
    options: [
      "2",
      "3",
      "4",
    ],
    answer: [1],
  },
  {
    question: "Connect the AUTOMATIC GAIN CONTROL into the SSB receiver circuit. The AUTOMATIC GAIN CONTROL connects from the PRODUCT DETECTOR output to what SSB receiver component?",
    options: [
      "RF FILTER",
      "RF AMPLIFIER",
    ],
    answer: [1],
  },
  {
    question: "What is the function of the QUADRATURE DETECTOR?",
    options: [
      "modulation",
      "demodulation",
      "mixing",
    ],
    answer: [1],
  },
  {
    question: "In the PHASE MODULATOR, what characteristic of the carrier signal does the message signal change?",
    options: [
      "amplitude",
      "frequency",
      "phase",
    ],
    answer: [2],
  },
  {
    question: "In the PHASE-LOCKED LOOP circuit, the recovered message signal is output at what component?",
    options: [
      "FILTER",
      "VCO",
      "PHASE DETECTOR",
    ],
    answer: [0],
  },
  {
    question: "How do you adjust the frequency of the VCO-HI oscillator signal?",
    options: [
      "by turning the NEGATIVE SUPPLY knob on the base unit",
      "by inserting a two-post connector in the 1000 kHz terminals",
      "by turning the POSITIVE SUPPLY knob on the base unit",
      "by turning the potentiometer knob on the VCO-HI circuit block.",
    ],
    answer: [2],
  },
  {
    question: "How do you adjust the amplitude of the VCO-LO oscillator signal?",
    options: [
      "by turning the NEGATIVE SUPPLY knob on the base unit",
      "by turning the potentiometer knob on the MODULATOR",
      "by turning the POSITIVE SUPPLY knob on the base unit",
      "by turning the potentiometer knob on the VCO-LO circuit block",
    ],
    answer: [3],
  },
  {
    question: "On the MODULATOR in the AM/SSB TRANSMITTER circuit block, how do you adjust the modulation of the carrier by the message signal?",
    options: [
      "by turning the potentiometer knob on the MODULATOR",
      "by adjusting the frequency of the carrier signal",
      "by adjusting the frequency of the message signal",
      "by turning the NEGATIVE SUPPLY knob on the base unit",
    ],
    answer: [0],
  },
  {
    question: "The VCO-LO, PHASE MODULATOR, QUADRATURE DETECTOR, and PHASE-LOCKED LOOP circuit blocks are associated with what type of radio signals?",
    options: [
      "amplitude modulated (AM) signals",
      "single sideband (SSB) signals",
      "angle modulated (FM and PM) signals",
      "double sideband (DSB) signals",
    ],
    answer: [2],
  },
  {
    question: "On the ANALOG COMMUNICATIONS circuit board, how do you connect the AM transmitter to the AM receiver?",
    options: [
      "A connection is not required because the signal is radiated by an antenna.",
      "Insert a two-post connector between R10 and the RF AMPLIFIER.",
      "Place switch S3 in the ON position.",
      "Insert a two-post connector between FROM TRANSMITTER",
    ],
    answer: [3],
  },
  {
    question: "How many inputs are there in the balanced modulator?",
    options: [
      "1",
      "2",
      "3",
    ],
    answer: [1],
  },
  {
    question: "What is the function of the potentiometer?",
    options: [
      "It adjusts the amount of modulation at the output.",
      "It adjusts the frequency of the output signal.",
    ],
    answer: [0],
  },
  {
    question: "When input signals have equal frequencies but are out-of-phase, what is the output difference component?",
    options: [
      "twice the input frequencies",
      "a dc voltage that varies with the cosine of the phase difference",
    ],
    answer: [1],
  },
  {
    question: "When a mixer is balanced to suppress the carrier signal, what significant frequencies are present in the output?",
    options: [
      "the sum and difference frequencies of the two inputs",
      "the message and carrier signal frequencies",
    ],
    answer: [0],
  },
  {
    question: "If the carrier signal frequency (fc) is 452 kHz and the message signal frequency (fm) is 3 kHz, what frequencies would be present in the frequency spectrum of the DSB signal?",
    options: [
      "3 kHz and 452 kHz",
      "449 kHz and 455 kHz",
      "449 kHz, 452 kHz, and 455 kHz",
    ],
    answer: [1],
  },
  {
    question: "Does the amplitude of the 455 kHz signal vary with the amplitude of the 3 kHz message signal?",
    options: [
      "yes",
      "no",
    ],
    answer: [0],
  },
  {
    question: "Does the amplitude of the 1000 kHz signal at pin 12 vary with the amplitude of the 3 kHz message signal?",
    options: [
      "yes",
      "no",
    ],
    answer: [0],
  },
  {
    question: "On the circuit board, what is the function of a balanced modulator?",
    options: [
      "mixer",
      "amplitude modulator",
      "detector",
      "All of the above.",
    ],
    answer: [3],
  },
  {
    question: "On the circuit board, how is the balanced modulator constructed?",
    options: [
      "It is an amplifier with an LCR network at one of the two inputs.",
      "It is an IC composed of three differential amplifiers and a current source.",
      "It is an IC composed of an envelope detector and a filter.",
      "The circuit consists of three transistors, a current source, and an LC network.",
    ],
    answer: [1],
  },
  {
    question: "How is the carrier signal suppressed in the output of a balanced modulator?",
    options: [
      "It is suppressed by the NEGATIVE SUPPLY voltage.",
      "It is suppressed by the POSITIVE SUPPLY voltage.",
      "It is suppressed by the null potentiometer in the message signal input.",
      "It is suppressed by adjusting the VCO-LO potentiometer.",
    ],
    answer: [2],
  },
  {
    question: "To a balanced modulator, the carrier signal is 1000 kHz and the message signal is 3 kHz. What are the sum and difference frequencies in the output?",
    options: [
      "997 kHz and 1003 kHz",
      "994 kHz and 997 kHz",
      "1003 kHz and 1006 kHz",
      "994 kHz and 1006 kHz",
    ],
    answer: [0],
  },
  {
    question: "When only the sum frequency is desired from a balanced modulator, what device removes the lower frequencies?",
    options: [
      "a mixer",
      "a product detector",
      "a filter",
      "an automatic gain control circuit",
    ],
    answer: [2],
  },
  {
    question: "A communication system requires a sender (transmitter), a transmission line or channel (frequency), and a receiver. What do you call a communication system that sends and receives information?",
    options: [
      "unidirectional",
      "amplitude modulated",
      "frequency modulated",
      "bidirectional",
    ],
    answer: [3],
  },
  {
    question: "What is the process of the low frequency message signal changing a characteristic of a high frequency carrier signal?",
    options: [
      "mixing",
      "demodulation",
      "modulation",
      "detection",
    ],
    answer: [2],
  },
  {
    question: "What do you call the frequency range of the sidebands around a carrier frequency?",
    options: [
      "bandwidth",
      "message signal",
      "noise",
      "modulated frequency",
    ],
    answer: [0],
  },
  {
    question: "What is the function of a product detector, quadrature detector, phase-locked loop, and envelope detector?",
    options: [
      "modulation",
      "demodulation",
      "filtering",
      "mixing",
    ],
    answer: [1],
  },
  {
    question: "What are the functions of the VCO-LO and VCO-HI circuit blocks?",
    options: [
      "mixing and demodulating",
      "message signal generation",
      "oscillator signal generation",
      "phase modulation",
    ],
    answer: [2],
  },
  {
    question: "What is the function of the RF POWER AMPLIFIER and the RF AMPLIFIER?",
    options: [
      "They increase the power level of the message signal to the speaker.",
      "They increase the power level of the message and carrier signals to the modulator.",
      "They function as the automatic gain control.",
      "They increase the power level of the transmitted and received signals, respectively.",
    ],
    answer: [3],
  },
  {
    question: "The VCO-LO, PHASE MODULATOR, QUADRATURE DETECTOR, and PHASE-LOCKED LOOP circuit blocks possess what type of signals?",
    options: [
      "Single Sideband (SSB) signals",
      "Double Sideband (DSB) signals",
      "Amplitude Modulated (AM) signals",
      "angle modulated signals",
    ],
    answer: [3],
  },
  {
    question: "What is the function of a balanced modulator?",
    options: [
      "modulation",
      "phase detection",
      "mixing",
      "All of the above.",
    ],
    answer: [3],
  },
  {
    question: "A less than 100% modulated AM signal is output from a modulator that is not balanced. What significant output frequencies are present?",
    options: [
      "the upper sideband, lower sideband, and carrier frequencies",
      "the message and carrier frequencies",
      "the upper sideband and lower sideband frequencies",
      "just the carrier",
    ],
    answer: [0],
  },
  {
    question: "What device removes the Lower Sideband (LSB) from a Double Sideband (DSB) signal?",
    options: [
      "limiter",
      "filter",
      "detector",
      "mixer",
    ],
    answer: [1],
  },
  {
    question: "In amplitude modulation (AM), the amplitude variations of the message signal cause what type of variations in the radio wave carrier signal?",
    options: [
      "frequency",
      "phase",
      "amplitude",
    ],
    answer: [2],
  },
  {
    question: "If the carrier signal (fc) is 2000 kHz and the message signal (fm) is 4 kHz, what will be the LSB and USB frequencies?",
    options: [
      "1996 kHz and 2004 kHz",
      "2000 kHz and 2008 kHz",
      "4 kHz and 8 kHz",
    ],
    answer: [0],
  },
  {
    question: "An AM radio station that is assigned the frequency of 710 kHz has to broadcast between what two frequencies?",
    options: [
      "700 kHz and 720 kHz",
      "700 kHz and 710 kHz",
      "705 kHz and 715 kHz",
    ],
    answer: [2],
  },
  {
    question: "If the carrier signal frequency (fc) is 1000 kHz and the message signal frequency (fm) is 2 kHz, how many frequencies are present in the AM signal?",
    options: [
      "1",
      "2",
      "3",
    ],
    answer: [2],
  },
  {
    question: "If the carrier signal frequency (fc) is 1000 kHz and the message signal frequency (fm) is 2 kHz, what is the lower sideband (LSB) frequency?",
    options: [
      "1002 kHz",
      "998 kHz",
      "1000 kHz",
    ],
    answer: [1],
  },
  {
    question: "The message signal shown produces which AM signal shown?",
    options: [
      "A",
      "B",
      "C",
    ],
    answer: [2],
  },
  {
    question: "You have set the carrier signal frequency (fc) to 1000 kHz and the message signal frequency (fm) to 2 kHz. What frequencies are present in the frequency spectrum of the AM signal?",
    options: [
      "2 kHz and 1000 kHz",
      "1000 kHz and 1002 kHz",
      "998 kHz, 1000 kHz, and 1002 kHz",
    ],
    answer: [2],
  },
  {
    question: "Change the signal generator function from a sine wave to a square wave. Did the envelope of the AM output signal change from a sine wave to a square wave?",
    options: [
      "yes",
      "no",
    ],
    answer: [0],
  },
  {
    question: "Return the signal generator function to a sine wave. While observing the AM output signal on channel 2, vary the signal generator’s AF FREQUENCY control knob to vary the message signal frequency. Did the frequency of the AM signal envelope change to correspond to the frequency of the message signal?",
    options: [
      "yes",
      "no",
    ],
    answer: [0],
  },
  {
    question: "Readjust the message signal frequency to 2 kHz. While observing the AM output signal, vary the signal generator’s AF LEVEL control knob to vary the amplitude of the message signal. Did the amplitude of the AM signal envelope change to correspond to the amplitude of the message signal?",
    options: [
      "yes",
      "no",
    ],
    answer: [0],
  },
  {
    question: "When the message signal frequency and amplitude change, what happens to the envelope of the AM signal?",
    options: [
      "Only the amplitude of the AM signal envelope changes.",
      "Only the frequency of the AM signal envelope changes.",
      "The frequency and amplitude of the AM signal envelope change.",
      "The frequency and amplitude of the carrier signal change.",
    ],
    answer: [2],
  },
  {
    question: "If a 2000 kHz carrier signal (fc) is amplitude modulated by a 3 kHz message signal (fm), what frequencies are present in the frequency spectrum of the AM signal?",
    options: [
      "3 kHz, 6 kHz, and 2000 kHz",
      "1997 kHz, 2000 kHz, and 2003 kHz",
      "2000 kHz and 2003 kHz",
      "1997 kHz and 2003 kHz",
    ],
    answer: [1],
  },
  {
    question: "What is the modulation index of the AM signal shown above?",
    options: [
      "1.5",
      "1.0",
      "0.5",
      "0.1",
    ],
    answer: [1],
  },
  {
    question: "If the message signal to an amplitude modulator is a voice signal, the envelope of the AM signal will have what type of waveform?",
    options: [
      "sine waveform",
      "square waveform",
      "triangular waveform",
      "an irregular waveform",
    ],
    answer: [3],
  },
  {
    question: "If a 3 kHz message signal modulates an 800 kHz carrier signal, what frequencies are contained in the AM radio signal?",
    options: [
      "797 kHz, 800 kHz, and 803 kHz",
      "3 kHz and 800 kHz",
      "800 kHz and 803 kHz",
      "797 kHz and 803 kHz",
    ],
    answer: [0],
  },
    {
      question: "Does the telegraph use digital codes for transmission?",
      options: [
        "yes",
        "no"
      ],
      answer: [0]
    },
    {
      question: "What digital communication medium became very popular for home entertainment in the late 1980s?",
      options: [
        "videocassette recorders",
        "compact disks",
        "digital TVs"
      ],
      answer: [1]
    },
    {
      question: "How many logic states do digital signals have?",
      options: [
        "1",
        "2",
        "3"
      ],
      answer: [1]
    },
    {
      question: "For the amplitude samples of the message signal to contain all the intelligence in the original signal, at what frequency must the samples be taken?",
      options: [
        "the analog message frequency",
        "greater than twice the maximum analog message frequency"
      ],
      answer: [1]
    },
    {
      question: "A frame of time slots repeats at what frequency?",
      options: [
        "sampling frequency",
        "maximum message signal's frequency"
      ],
      answer: [0]
    },
    {
      question: "What type of filter is in the PAM circuit block?",
      options: [
        "low-pass",
        "band-pass",
        "high-pass"
      ],
      answer: [0]
    },
    {
      question: "With a 2 kHz maximum message signal, is an 8 kHz sampling frequency adequate?",
      options: [
        "yes",
        "no"
      ],
      answer: [0]
    },
    {
      question: "Do the amplitudes of the PAM pulses follow the waveform of the message signal?",
      options: [
        "yes",
        "no"
      ],
      answer: [0]
    },
    {
      question: "Does the recovered M2 message signal from the FILTER (CH 2) have the same frequency as the M2 message signal (CH 1)?",
      options: [
        "yes",
        "no"
      ],
      answer: [0]
    },
    {
      question: "What multiplexing method is used to transmit different message signals in opposite directions over the same transmission line between CODEC 1 and CODEC 2?",
      options: [
        "frequency",
        "phase",
        "time-division"
      ],
      answer: [2]
    },
    {
      question: "What operation produces a pulse-modulated signal?",
      options: [
        "converting the message signal to a digital code",
        "passing the message signal through a high-pass filter",
        "sampling the amplitude of the message signal",
        "sampling the message signal's frequency"
      ],
      answer: [2]
    },
    {
      question: "What are PAM, PWM, and PPM signals?",
      options: [
        "pulse-modulated signals",
        "4-bit digital codes",
        "PLL-modulated signals",
        "2-bit digital codes"
      ],
      answer: [0]
    },
    {
      question: "The PCM signal on the circuit board contains how many bits?",
      options: [
        "1",
        "4",
        "8",
        "16"
      ],
      answer: [2]
    },
    {
      question: "What circuit demodulates a pulse-modulated signal?",
      options: [
        "sampler",
        "low-pass filter",
        "comparator",
        "sample/hold"
      ],
      answer: [1]
    },
    {
      question: "How are PAM and PCM signals usually multiplexed?",
      options: [
        "JK multiplexed (JKM)",
        "SCR multiplexed (SCRM)",
        "integrated digitally multiplexed (IDM)",
        "time-division multiplexed (TDM)"
      ],
      answer: [3]
    },
    {
      question: "What is the frequency of the 5 Vpk-pk M1 message signal?",
      options: [
        "1 kHz",
        "2 kHz",
        "5 kHz"
      ],
      answer: [0]
    },
    {
      question: "What is the amplitude of the 2 kHz M2 signal?",
      options: [
        "1 Vpk-pk",
        "2 Vpk-pk",
        "5 Vpk-pk"
      ],
      answer: [2]
    },
    {
      question: "In the PAM circuit block, what circuit is the receiver?",
      options: [
        "SAMPLER",
        "FILTER"
      ],
      answer: [1]
    },
    {
      question: "What PTM circuit converts the message signal into a staircase PAM signal?",
      options: [
        "ADDER",
        "SAMPLE/HOLD",
        "COMPARATOR"
      ],
      answer: [1]
    },
    {
      question: "With the potentiometer knob on the CHANNEL SIMULATOR completely CCW, is any noise being introduced into the transmitted PAM signal?",
      options: [
        "yes",
        "no"
      ],
      answer: [1]
    },
    {
      question: "What circuit(s) demultiplex(es) the time-division multiplexed PAM signals?",
      options: [
        "FILTER 1 and FILTER 2",
        "SAMPLE HOLD 1 and SAMPLE HOLD 2",
        "SLOT COUNTER"
      ],
      answer: [1]
    },
    {
      question: "What multiplexing method do the CODECs use to transmit two PCM signals in opposite directions over the same transmission line?",
      options: [
        "time-division multiplexing (TDM)",
        "frequency-division multiplexing (FDM)",
        "amplitude-separation multiplexing (ASM)"
      ],
      answer: [0]
    },
    {
      question: "The DIGITAL SAMPLER encodes the increase or decrease in the message signal's amplitude into how many bits?",
      options: [
        "1",
        "4",
        "8"
      ],
      answer: [0]
    },
    {
      question: "What circuit block generates PWM and PPM signals?",
      options: [
        "PAM",
        "PTM",
        "PCM",
        "PAM-TDM"
      ],
      answer: [1]
    },
    {
      question: "What circuit block(s) produce(s) digital signals?",
      options: [
        "PAM-TDM",
        "PTM",
        "PCM and DELTA",
        "PAM and PTM"
      ],
      answer: [2]
    },
    {
      question: "In what circuit block(s) can the signals be time-division multiplexed for transmission?",
      options: [
        "PCM and PAM-TDM",
        "DELTA",
        "PTM",
        "PAM and DELTA"
      ],
      answer: [0]
    },
    {
      question: "What circuit block(s) contain(s) an ADDER circuit?",
      options: [
        "PAM",
        "PCM and DELTA",
        "DELTA",
        "PTM and PAM-TDM"
      ],
      answer: [3]
    },
    {
      question: "What is the frequency and amplitude of the M2 message signal on the circuit board?",
      options: [
        "5 kHz and 2 Vpk-pk",
        "2 kHz and 5 Vpk-pk",
        "1 kHz and 5 Vpk-pk",
        "2 kHz and 2 Vpk-pk"
      ],
      answer: [1]
    },
    {
      question: "What are pulse-modulated signals?",
      options: [
        "digital codes for frequency samples of a message signal",
        "AM and FM analog signals",
        "pulses that represent amplitude samples of a message signal",
        "pulses that represent frequency samples of a message signal"
      ],
      answer: [2]
    },
    {
      question: "Which of the following are pulse-modulated signals?",
      options: [
        "PAM",
        "PWM",
        "PPM",
        "All of the above."
      ],
      answer: [3]
    },
    {
      question: "Which of the following signals are digital codes?",
      options: [
        "PAM",
        "PCM",
        "PWM",
        "PPM"
      ],
      answer: [1]
    },
    {
      question: "For a pulse-modulated signal to contain all of the message signal's intelligence, the message signal must be sampled at what frequency?",
      options: [
        "less than the message signal frequency",
        "greater than 8 kHz",
        "less than 16 kHz",
        "greater than twice the maximum message signal frequency"
      ],
      answer: [3]
    },
    {
      question: "Which pulse-modulated signal(s) can be time-division multiplexed (TDM)?",
      options: [
        "PAM and PCM",
        "DM and PPM",
        "PWM",
        "PPM"
      ],
      answer: [0]
    },
    {
      question: "What circuit produces pulse-amplitude modulation (PAM) signals?",
      options: [
        "comparator",
        "adder",
        "sampler",
        "CODEC"
      ],
      answer: [2]
    },
    {
      question: "What circuit demodulates (recovers) pulse-modulated signals?",
      options: [
        "limiter",
        "low-pass filter",
        "sample/hold",
        "compressor"
      ],
      answer: [1]
    },
    {
      question: "What circuit encodes analog message signals and decodes pulse-code modulated (PCM) signals?",
      options: [
        "CODEC",
        "digital sampler",
        "ramp generator",
        "ring counter"
      ],
      answer: [0]
    },
    {
      question: "What circuit may be used in both the transmitter and receiver sections of pulse-modulated circuits?",
      options: [
        "compressor",
        "ramp generator",
        "sample/hold",
        "adder"
      ],
      answer: [2]
    },
    {
      question: "A 1-bit delta modulation (DM) code is output by the digital sampler. What does the DM code represent?",
      options: [
        "an amplitude sample of the message signal",
        "an increase or decrease in the message signal's amplitude",
        "a change in the message signal's frequency",
        "an increase or decrease in the message signal's phase"
      ],
      answer: [1]
    },
    {
      question: "If the maximum message signal frequency is 4 kHz and the sample pulse frequency is 12 kHz, what frequencies are present in the first replica of the PAM signal?",
      options: [
        "12 kHz and 16 kHz",
        "4 kHz and 20 kHz",
        "8 kHz and 12 kHz",
        "8 kHz and 16 kHz"
      ],
      answer: [3]
    },
    {
      question: "What circuit demodulates a PAM signal?",
      options: [
        "sampler",
        "sample/hold",
        "high pass filter",
        "low pass filter"
      ],
      answer: [3]
    },
    {
      question: "The CATHODE and ANODE of the Fiber Optic Transmitter must be configured. In which two positions should you place the two-post connectors when connecting the CATHODE and ANODE to the ANALOG TRANSMITTER circuit block?",
      options: [
        "ANALOG",
        "DIGITAL"
      ],
      answer: [0]
    },
    {
      question: "The PHOTO TRANSISTOR circuit block is used to make relative measurements of light",
      options: [
        "power.",
        "wavelength.",
        "frequency.",
        "color."
      ],
      answer: [0]
    },
    {
      question: "What would happen if you removed the optical fiber from the transmitter?",
      options: [
        "Nothing would change.",
        "All the LEDs would flash ON and OFF.",
        "The output LEDs would stop flashing."
      ],
      answer: [2]
    },
    {
      question: "Which is not a necessary part of a fiber-optic communication link?",
      options: [
        "light source",
        "optical fiber",
        "RS-232 interface",
        "light detector"
      ],
      answer: [2]
    },
    {
      question: "The Fiber Optic Transmitter on your circuit board contains a",
      options: [
        "driver circuit.",
        "light source.",
        "light detector.",
        "fiber-to-detector connector."
      ],
      answer: [1]
    },
    {
      question: "The Fiber Optic Receiver on your circuit board contains a",
      options: [
        "driver circuit.",
        "light source.",
        "source-to-fiber connector.",
        "light detector."
      ],
      answer: [3]
    },
    {
      question: "On your circuit board, a fiber-to-detector connector can be found on the",
      options: [
        "Fiber Optic Transmitter.",
        "Fiber Optic Receiver.",
        "LIGHT EMITTING DIODES circuit block.",
        "ANALOG TRANSMITTER circuit block."
      ],
      answer: [1]
    },
    {
      question: "Which can be transmitted over a fiber-optic communication link?",
      options: [
        "audio frequency",
        "composite video",
        "pulses and data",
        "All of the above."
      ],
      answer: [3]
    },
    {
      question: "Which part of the optical fibers supplied with your circuit board has the smallest outer diameter?",
      options: [
        "plastic fiber's core",
        "glass fiber's core",
        "plastic fiber's jacket",
        "glass fiber's cladding"
      ],
      answer: [1]
    },
    {
      question: "In order to transmit composite video signals over the fiber-optic link on your circuit board, in which position must the POWER SUPPLY's -5V shunt be?",
      options: [
        "VIDEO",
        "DIGITAL",
        "AUDIO",
        "ANALOG"
      ],
      answer: [3]
    },
    {
      question: "A phototransistor can be used to make relative measurements of light",
      options: [
        "power.",
        "wavelength.",
        "frequency.",
        "color."
      ],
      answer: [0]
    },
    {
      question: "Which LED in the LIGHT EMITTING DIODES circuit block emits the most light power?",
      options: [
        "red",
        "yellow",
        "green",
        "infrared"
      ],
      answer: [3]
    },
    {
      question: "Which is not a basic part of a fiber-optic communication link?",
      options: [
        "speaker",
        "light source",
        "optical fiber",
        "output circuit"
      ],
      answer: [0]
    },
    {
      question: "In a fiber-optic communication link, a fiber-to-detector connection can be found at the output of a(n)",
      options: [
        "driver circuit.",
        "light source.",
        "optical fiber.",
        "light detector."
      ],
      answer: [2]
    },
    {
      question: "Which is not a common term in fiber optics?",
      options: [
        "optical fiber",
        "fiber-optic cable",
        "light cable",
        "light pipe"
      ],
      answer: [2]
    },
    {
      question: "What cannot be sent over a fiber-optic communication link?",
      options: [
        "telephone messages",
        "cable TV signals",
        "computer data",
        "electric power"
      ],
      answer: [3]
    },
];

const quizContainer = document.getElementById("quiz-container");

// Load sounds
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

questions.forEach((q, index) => {
const questionDiv = document.createElement("div");
questionDiv.classList.add("question");

const questionText = document.createElement("h3");
questionText.textContent = `${index + 1}. ${q.question}`;
questionDiv.appendChild(questionText);

const optionsDiv = document.createElement("div");
optionsDiv.classList.add("options");

if (q.type === "match") {
  // If it's a matching question
  const matchingContainer = document.createElement("div");
  matchingContainer.classList.add("matching-container");

  q.options.forEach((option, i) => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("matching-option");
    optionDiv.textContent = option;
    matchingContainer.appendChild(optionDiv);
  });

  optionsDiv.appendChild(matchingContainer);
} else {
  q.options.forEach((option, i) => {
    const button = document.createElement("button");
    button.textContent = option;

    button.addEventListener("click", () => {
      if (q.answer.includes(i)) {
        button.classList.add("correct");
        correctSound.play();
      } else {
        button.classList.add("wrong");
        wrongSound.play();
      }

      button.disabled = true; // Disable the button after clicking

      // Check if all correct answers are selected
      const selectedCorrect = Array.from(optionsDiv.children).filter(
        (btn) => btn.classList.contains("correct")
      ).length;

      if (selectedCorrect === q.answer.length) {
        // Disable all buttons when all correct answers are selected
        Array.from(optionsDiv.children).forEach((btn) => {
          btn.disabled = true;
        });
      }
    });

    optionsDiv.appendChild(button);
  });
}

questionDiv.appendChild(optionsDiv);
quizContainer.appendChild(questionDiv);
});
