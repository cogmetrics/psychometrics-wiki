---
id: glossary
title: Glossary
description: Glossary
---

# Glossary

## Theories of Intelligence

### Spearman’s Two-Factor Theory

* Intelligence consists of **g** (general factor) and **s** (specific factor).  
* This is the most accepted theory here in the subreddit and most well-known.

### Thurstone’s Primary Mental Abilities

* Proposes that intelligence consists of **7 primary mental abilities**: numerical, spatial, verbal & verbal fluency, inductive reasoning, perceptual speed, and memory.  
* There is not a single general intelligence factor, but contemporary research has shown that these primary abilities are actually still correlated and influenced by some higher-order general factor.

### Gardner's Theory of Multiple Intelligences

* Proposes that intelligence is composed of **9 factors**: linguistic, logical-mathematical, spatial, bodily-kinesthetic, musical, interpersonal, intrapersonal, naturalist, and existential intelligences.  
* Rejects the idea of a general intelligence factor, but it should be noted that there is little actual substantial evidence supporting this theory.

### Sternberg’s Triarchic Theory

* Proposes that intelligence consists of **three aspects**: analytical, creative, and practical intelligence.  
* This theory is broader in its interpretation of intelligence, but note that these three intelligences have been shown to correlate to a higher-order cognition factor (that being **g**).

### Parietal Frontal Integration Theory

* Proposes that higher cognitive functions are emergent properties of the interactions of the parietal and frontal lobes.  
* It is a neuroanatomical model, but it is not exactly complete in specifying the degree to which human intelligence may manifest itself because it is quite sophisticated.

---

## Reliability, Validity, Normative Data

### Reliability

* Consistency of test scores. A high reliability means scores don’t fluctuate much on retests.

### Validity

* How much a test measures what it intends to measure.

### Normative Data

* Distribution of scores in a sample representing the population.

**Note:** After establishing factor structure, reliability, and validity, you standardize the test, transforming raw scores into standardized scores (e.g., *z-scores*, *T-scores*, percentiles). Often a mean of 100 and an SD of 15/16/24.

#### Skew and Kurtosis

* **Skew**: measure of symmetry.  
  * 0 = symmetric  
  * > 1 or < −1 = significantly skewed  
* **Kurtosis**: measure of peakedness.  
  * 0 = normal  
  * > 1 or < −1 = significantly kurtotic  

Transformations like logs or square roots can help correct skew or kurtosis.

---

## Raw Scores, Scaled Scores, and Composite Scores

### Raw Scores

* The bare points for each subtest or test. Leads to scaled scores.  
* To make them easier to interpret and compare, raw scores are typically converted into scaled scores (SS) using a linear transformation. This adjusts for differences in the difficulty among subtests and allows scores to be placed on a similar metric of comparison.  
* The mean and standard deviation (SD) of the scaled scores are usually set to certain parametrized values, such as a mean of 100 and an SD of 15, 16, or 24. SD values tell us the degree of variability in the scores. A higher SD, such as 24, indicates a wider distribution of scores, whilst a lower SD like 15 indicates a narrower distribution.

### Scaled Scores (SS)

* Raw scores are converted to scaled scores after a sample has been standardized.

### Composite Scores

* Scaled scores are then combined to form the composite score, e.g., an overall Full Scale IQ.  
* This is calculated by summing or averaging the SS from multiple subtests. These composite scores represent specific cognitive abilities like verbal and performance IQ.  
* As for norming, the composite scores are compared to a representative sample of the population. In norming, some basic steps are followed, such as calculating the mean and SD of the composite scores in the norm group and establishing the percentiles. These standard scores allow for the interpretation of an individual's performance relative to the general population.  
* **Norming expanded:** For the WAIS-IV, the mean is set at 100, and the standard deviation at 15. These values become the norms in converting any raw score into a standard IQ score.  

  **Example calculations** (mean = 100, SD = 15):

  * IQ 85 (−1 SD): 100 − 15 = 85  
  * IQ 77 (−1.5 SD): 100 − (1.5 × 15) ≈ 77  
  * IQ 130 (+2 SD): 100 + (2 × 15) = 130

---

## Basic Calculations Introduced

* **Percentile Rank:**  

  $$
    \text{PR} = \frac{R}{N} \times 100
  $$

  where *R* is the rank (when scores are sorted) and *N* is the number of scores.  

* **Z-Scores:**  

  $$
    Z = \frac{X - \mu}{\sigma}
  $$

  Example with WAIS parameters (M = 100, SD = 15): IQ 77 ⇒ Z = (77 − 100) / 15 = −1.5  

* **Calculating IQ percentile and rarity** using the normal distribution’s CDF, Φ(*z*):  

  1. IQ 125 (M = 100, SD = 15) ⇒ Z = 1.67 ⇒ Φ(1.67) = 0.952 ⇒ 95.2 % percentile  
  2. Rarity = 1 / (1 − 0.952) ≈ 1 in 21  

  Another example with mean = 110, SD = 20, IQ = 125 ⇒ Z = 0.75 ⇒ Φ(0.75) = 0.773 ⇒ Rarity ≈ 1 in 4.39  

  Another example: IQ 160, M = 100, SD = 15 ⇒ Z = 4 ⇒ Φ(4) = 0.999 968 3 ⇒ Rarity ≈ 1 in 31 560  

7. At extremes, sample sizes may be limited, so norms may not be accurate. Options:  
   * Extrapolate beyond your sample.  
   * Assume a normal distribution.  
   * Use linear or polynomial regression, smoothing techniques, or just test more people and update norms over time.

---

## OK BRO THAT'S COOL BUT HOW DO YOU MAKE NORMS?

1. You have a representative sample of people from a population take the IQ test.  
2. You have raw scores for each test item. You also track the percentage of correct answers for each item (to decide which questions to toss).  
   * The percentages of the sample that score at each level are calculated to determine rarity for each score. 68.2 % of the sample should score between −1 SD and +1 SD, ~13.6 % score between −1 SD and −2 SD, ~2.1 % score between −2 SD and −3 SD, etc.  
3. Now you have a distribution of total scores, hopefully resembling a normal distribution. The SD and M are important.  
4. Scores are normalized so that the mean is 100, and the SD could be 15, 16, or 24 (commonly 15).  
5. Percentile ranks are then found for each score to determine how a particular score compares to the norm group.  
6. The final test is made using questions with good statistics. You create norm tables that allow users to convert raw scores to normalized IQ scores with percentile ranks. For example, 45/50 might correspond to an IQ of 145 if it’s the top 1 % for an age group.

---

## Estimating FSIQ

1. If your scores vary often among good tests (which they shouldn’t too much), then you can either take a range of the scores or take a weighted average of them based on *g*-loading, or sometimes a simple arithmetic average may even suffice if all the tests are good, and a *g*-loading is not known.  
2. If you know the *g*-loading or correlation (they are interchangeable here) to a highly *g*-loaded test, then you can use another estimation method (though it is just better to take a highly *g*-loaded test on the subreddit at this point) such as inputting test scores and assigning the weight based on the *g*-loading or correlation to the test (e.g., correlation to WAIS or SBV or old SAT).  

   **Example:** You have two tests, A and B.  

   * A has a *g*-loading or correlation of **0.8**  
   * B has a correlation of **0.7**  

   Sum of *g*-loadings = 0.8 + 0.7 = 1.5  

   Dividing each by 1.5 gives new weights = 0.53 and 0.47. Then you can use a calculator to input the composite scores along with these weights for each test, assuming the SD is the same.  
3. We recommend using the [Compositator](https://cognitivemetrics.com/calculator/) found on the subreddit. It is valuable so far as you have an estimation for the indices (Verbal Comprehension, Visual Spatial, Fluid Reasoning, Quantitative Intelligence, Working Memory, and Processing Speed).

---

## Calculating the Significance of Score Differences

* Let $ r_{xx} $ = reliability (e.g., coefficient alpha, square of **g** loading, etc.), and SD = standard deviation of the test’s scores. Then  

  $$
    \text{SEM} = \text{SD} \times \sqrt{1 - r_{xx}}
  $$

* If you have the results of two tests (SEM₁ and SEM₂), use  

  $$
    \frac{\text{Difference}}{\sqrt{\text{SEM}_1^2 + \text{SEM}_2^2}} \times 1.96
  $$

  to find the minimum difference in scores required for significance at *p* < .05.  

* If the tests have the same SD (or you convert them to the same scale):

  $$
    \frac{\text{Difference}}{\text{SD} \times \sqrt{2 - r_{xx1} - r_{xx2}}} \times 1.96
  $$

  where $ r_{xx1} $ and $ r_{xx2} $ are the reliabilities of each test.

**Example**

* Test A: SD = 15, Reliability = 0.9  
* Test B: SD = 15, Reliability = 0.8  

1. SEM₁ = 15 × √(1 − 0.9) ≈ 4.72  
2. SEM₂ = 15 × √(1 − 0.8) ≈ 6.71  

Minimum difference in scores for significance (alternative formula since SDs are the same):

$$
  \text{Threshold} \approx \left$frac{\text{Difference}}{15 \times \sqrt{2 - 0.9 - 0.8}}\right) \times 1.96
  \approx \left$frac{\text{Difference}}{8.67}\right) \times 1.96
$$

If the absolute difference between the average scores of the two tests is greater than that threshold, the differences are significant at *p* < .05.

**Notes**

1. **SEM:** a lower SEM means a test is better.  
2. **Statistical significance:** refers to how much an outcome cannot be reasonably influenced by extraneous factors.

---

## Factor Analysis, Intercorrelation Matrix, Subtest Loadings, Higher-Order Factors, Bifactor Models, Structural Equation Modeling

### Factor Analysis

* Explains correlations between multiple variables by underlying factors.

### Intercorrelation Matrix

* Table of Pearson correlation coefficients between variables.

### Subtest Loadings

* Correlation of each subtest to a factor.

### Higher-Order Factors

* The **g** factor emerges if first-order factors are intercorrelated.

### Bifactor Models

* Subtests are explained by both a general and a specific factor.

### Structural Equation Modeling

* Models latent variables, intercorrelations, possible direct/indirect effects.

### g-loading

* Ranges from 0 to 1. Higher means a test is more indicative of **g**.

---

## Variance and Covariance

* **Variance:** spread of distribution.  
* **Covariance:** degree to which two variables change together (raw measure).  
* **Correlation:** normalized covariance (dimensionless, −1 to 1).

Important in factor analysis/SEM for interpreting relationships between observed variables and latent constructs.

---

## Classical Test Theory (CTT)

* Traditional approach (WAIS, SB).  
* Observed score = true score + error.  
* SEM is sample-dependent.  
* Does not place measures on an equal-level continuum.

---

## ICC (Intraclass Correlation)

* Quantifies reliability of composite scores.  
* Ranges from 0 to 1. Higher = better.

---

## Item Response Theory (IRT)

* Models relationship between an underlying ability and the probability of a person’s response.  
* Evaluates items individually.  
* Reduces the impact of guessing.

---

## Logistic Regression

* For estimating odds of a binary event.  
* Uses logit transformation of odds.  
* Fit is assessed by likelihood-ratio test.  
* R²-like stats (e.g., McFadden's) differ from linear regression R².

---

## SLODR and Other Terms

* **Spearman's Laws of Diminishing Returns:** as more subtests are added, average intercorrelation decreases.  
* **Spearman-Brown Formula:** estimates how reliability changes with test length.  

  $$
    R_{xx}' = \frac{N \times R_{xx}}{1 + (N - 1) \times R_{xx}}
  $$

  where  
  * $ R_{xx}' $ = reliability of new test length  
  * $ R_{xx} $ = reliability of original test length  
  * *N* = ratio of new length to old length  

* **Regression to the mean:** extreme scores tend to move closer to average.  
  * IQ is polygenic (many genes involved). Heritability typically ~0.7 or higher. But a child only inherits ~50 % of a parent's genes.  
  * Environment, epigenetics also matter.  
* **Flynn Effect:** IQ scores tend to increase over generations.

---

## Basic Example on How a Factor Analysis Is Performed

1. Collect/clean data (30 test items measuring various cognitive abilities).  
2. Calculate the 30 × 30 correlation matrix.  
3. Choose **EFA** (if no prior hypothesis).  
4. Extract factors (PCA, PAF, ML, etc.).  
5. Determine the number of factors (eigenvalues > 1, scree plot).  
6. Perform factor rotation (orthogonal or oblique).  
7. Interpret the rotated factor matrix.  
8. Compute factor scores.  
9. Assess model fit (chi-square, RMSEA, CFI, TLI).  
10. Validate factor structure by repeating on a new dataset or cross-validating.

---

## Intro to WAIS-IV

* Mean = 100, SD = 15  
* Normed on 2 200 people  
* Ages 16 to 90  
* 4 indices derived from subtests

### Verbal Comprehension Index (VCI)

* **Similarities:** abstract verbal reasoning, semantic knowledge.  
* **Vocabulary:** knowledge, verbal fluency, semantic knowledge.  
* **Information:** general knowledge.  
* **Comprehension** (supplemental): social conventions, rules.

### Perceptual Reasoning Index (PRI)

* **Block Design:** spatial visualization, motor skill.  
* **Visual Puzzles:** visual-spatial ability.  
* **Matrix Reasoning:** inductive, nonverbal ability.  
* **Picture Completion** *(optional)*: identify missing element.  
* **Figure Weights** *(optional)*: quantitative reasoning with scales/shapes.

###  Working Memory Index (WMI)

* **Digit Span:** working memory, auditory processing.  
* **Arithmetic:** quantitative reasoning.  
* **Letter-Number Sequencing**: recall letters/numbers.

### Processing Speed Index (PSI)

* **Symbol Search:** processing speed, associative memory.  
* **Coding:** processing speed, associative memory.  
* **Cancellation** *(optional)*: scanning, crossing out shapes.

---

## Intro to Stanford-Binet-5

* Mean = 100, SD = 16  
* Normed on 4 800 people  
* Ages 2 to 85  
* 5 cognitive factors  

1. **Fluid Reasoning**  
   * Matrix Reasoning (NV)  
   * Three subtests (V)  
2. **Knowledge** (general knowledge, LTM)  
   * Vocabulary (V)  
   * Procedural Knowledge (NV)  
   * Picture Absurdities (NV)  
3. **Quantitative**  
   * Quantitative Reasoning (V)  
   * Quantitative Reasoning (NV)  
4. **Visual-Spatial**  
   * One subtest (V)  
   * Two subtests (NV)  
5. **Working Memory**  
   * Block Span (NV)  
   * Memory for Sentences (V)

---

## How to Interpret Structural Equation Modeling

1. Circles = latent variables  
2. Squares/rectangles = observed variables  
3. Single-headed arrows = impact of one variable on another  
4. Double-headed arrows = covariances  
5. Thicker arrows or values next to arrows = magnitude of impact
