import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ia';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;