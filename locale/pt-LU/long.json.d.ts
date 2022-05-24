import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-LU';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;