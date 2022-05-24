import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bs-Cyrl';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;