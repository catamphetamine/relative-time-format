import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'rw';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;