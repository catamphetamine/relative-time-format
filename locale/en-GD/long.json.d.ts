import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GD';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;