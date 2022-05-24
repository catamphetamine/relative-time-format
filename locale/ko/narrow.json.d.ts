import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ko';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;