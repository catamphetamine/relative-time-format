import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ks';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;