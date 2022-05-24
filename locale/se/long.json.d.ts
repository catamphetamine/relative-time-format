import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'se';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;