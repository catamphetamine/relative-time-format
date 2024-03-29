import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ko';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;