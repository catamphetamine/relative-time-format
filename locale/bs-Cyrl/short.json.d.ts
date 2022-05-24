import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bs-Cyrl';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;